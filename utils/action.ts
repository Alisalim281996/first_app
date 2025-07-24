"use server"
import { redirect } from "next/navigation"
import db from "./db"
import { currentUser } from "@clerk/nextjs/server"
import { imageSchema, ProductSchema, reviewSchema, validateSchema } from "./schema"
import { deleteImage, uploadImage } from "./supabase"
import { revalidatePath } from "next/cache"
import { links } from "./link"
import { actionFunction } from "./types"
export async function fetchFeaturedProducts() {
    const product = await db.product.findMany({
        where: {
            featured: true,
        },
    })

    return product
}
export async function fetchAllProduct({ search = '' }: { search: string }) {
    const product = await db.product.findMany({
        where: {
            OR: [
                { name: { contains: search, mode: 'insensitive' } }
            ]
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return product
}
export async function fetchSingleProduct(productId: string) {
    const product = await db.product.findUnique({
        where: {
            id: productId
        }
    })
    if (!product) {
        redirect('products')
    }
    return product
}


const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) {
        return redirect('/')
    }
    return user
}
const renderError = (error: unknown): { message: string } => {
    return { message: error instanceof Error ? error.message : "Unknown Error" }
}
export async function createProductFunction(
    prevState: any,
    formData: FormData): Promise<{ message: string }> {
    const user = await getAuthUser();
    try {
        const rowData = Object.fromEntries(formData)
        const validateData = validateSchema(ProductSchema, rowData)

        const file = formData.get('image') as File

        const validateImage = validateSchema(imageSchema, { image: file })

        const fullImagePath = await uploadImage(validateImage.image)
        await db.product.create({
            data: {
                ...validateData,
                image: fullImagePath,
                clerkId: user.id
            }
        })
        return {
            message: "Product Created"
        }
    } catch (error) {
        return renderError(error)
    }
}
const getAdminUser = async () => {
    const user = await getAuthUser();
    if (user.id !== process.env.ADMIN_USER_ID) redirect('/')
    return user
}

export const fetchAdminPost = async () => {
    await getAdminUser()

    const user = await getAuthUser();

    const product = await db.product.findMany({
        where: {
            clerkId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return product
}

export const deleteProduct = async (prevState: { productId: string }) => {
    const { productId } = prevState;
    await getAdminUser();

    try {
        const product = await db.product.delete({
            where: {
                id: productId
            }
        })
        await deleteImage(product.image)


        return { message: "Product Remove" }
    } catch (error) {
        return renderError(error)
    }
}

export const updatProductAction = async (prevState: any, formData: FormData) => {
    await getAdminUser();
    try {
        const productId = formData.get('id') as string
        const rowData = Object.fromEntries(formData)
        const validateData = validateSchema(ProductSchema, rowData)

        await db.product.update({
            where: {
                id: productId
            },
            data: {
                ...validateData
            }
        })
        revalidatePath(`${links.AdminProducts.href}`)

        return {
            message: "product Upated Successfuly"
        }
    } catch (error) {
        return renderError(error)
    }
}

export const updateProductImageAction = async (prevState: any, formData: FormData) => {
    await getAuthUser()
    try {
        const image = formData.get('image') as File

        const productId = formData.get('id') as string
        const oldImageUrl = formData.get('url') as string


        const validateFile = validateSchema(imageSchema, { image })
        const fullPath = await uploadImage(validateFile.image)
        await deleteImage(oldImageUrl)

        await db.product.update({
            where: {
                id: productId,
            },
            data: {
                image: fullPath
            }
        })
        revalidatePath(`${links.AdminProducts.href}/${productId}/edit`)
        return {
            message: "Image Updated Successfully"
        }

    } catch (error) {
        return renderError(error)
    }
}


export const fetchFavId = async (productId: string) => {
    const user = await getAuthUser();
    const fav = await db.favorites.findFirst(
        {
            where: {
                productId: productId,
                clerkId: user.id
            },
            select: {
                id: true
            }
        }

    )
    return fav?.id || null
}


type toggleFavActionProps = {
    productId: string;
    favoriteId: string | null;
};

export const tooglefavAction: actionFunction = async (prevState, _formData) => {
    const { productId, favoriteId } = prevState as toggleFavActionProps;

    try {
        const user = await getAuthUser();

        if (favoriteId) {
            await db.favorites.delete({
                where: { id: favoriteId },
            });
        } else {
            await db.favorites.create({
                data: {
                    productId,
                    clerkId: user.id,
                },
            });
        }

        revalidatePath("");

        return {
            message: favoriteId ? "Removed from Favorite" : "Added to Favorite",
        };
    } catch (error) {
        return renderError(error);
    }
};

export const fetchUserFav = async () => {
    const user = await getAuthUser()

    const favorite = await db.favorites.findMany({
        where: {
            clerkId: user.id
        },
        include: {
            product: true
        }
    })
    return favorite

}


// review 

export const createReviewAction = async (
    prevState: any,
    formData: FormData
) => {
    const user = await getAdminUser();

    try {
        const rowData = Object.fromEntries(formData);
        const validateData = validateSchema(reviewSchema, rowData);

        await db.review.create({
            data: {
                ...validateData,
                clerkId: user.id,
            },
        });

        revalidatePath(`/product/${validateData.productId}`);

        return {
            message: "Review Submitted Successfully",
        };
    } catch (error) {
        return renderError(error);
    }
};


export const fetchProductReview = async (productId: string) => {
    // لاضهار كل التعليقات الخاصه بهذا المنتج  productId 
    const review = await db.review.findMany({
        where: {
            productId: productId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return review
}




