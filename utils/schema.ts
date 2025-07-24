import { z, ZodSchema } from 'zod'

export const ProductSchema = z.object({
    name: z.string().min(4, {
        message: "name must be at least 4 characters"
    }).max(30, {
        message: "name must be less than 30 characters"
    }),
    description: z.string().refine((description) => {
        const wordCount = description.split(" ").length
        return wordCount >= 10 && wordCount <= 500
    }, {
        message: "description must be between 10 and 500 words"
    }),
    price: z.coerce.number().int().min(0, {
        message: "price must be positive number."
    }),
    featured: z.coerce.boolean()
})


export function validateSchema<T>(schema: ZodSchema<T>, data: unknown): T {

    const result = schema.safeParse(data)

    if (!result.success) {
        const error = result.error.errors.map((e) => e.message)
        throw new Error(error.join(","))
    }
    return result.data;
}



export const imageSchema = z.object({
    image: validateImageFile()
})


function validateImageFile() {
    const imageSize = 1024 * 1024; //1MB
    const acceptedFileType = ['image/']

    //النوع الذي يجب ان تستقبله هوه ملف 

    return z.instanceof(File).refine((file) => {
        return !file || file.size <= imageSize;
    }, {
        message: "File size must be less than 1Mb"
    })
        .refine((file) => {
            return !file || acceptedFileType.some((type) => file.type.startsWith(type));
        }, {
            message: "file must be an image"
        })
}

export const reviewSchema = z.object({
    // العناصر الي يسويها المستخدم 
    rating: z.coerce.number().min(1, { message: "Rating must be at least 1" }).max(5, { message: "Rating must be at most 5" }),
    comment: z.string().min(10, { message: "comment must be at least 10" }).max(100, { message: "comment must be at most 100" }),
    // اشياء لازم نتاكد منها قبل لا نضيف تعليق 
    productId: z.string().refine((value) => value !== '', { message: "Product ID cannot be empty " }),
    // لا تقوم قيمته فيها فراغ لاي سبب كان 
    authorName: z.string().refine((value) => value !== '', { message: "authorName cannot be empty " }),
    authonImageUrl: z.string().refine((value) => value !== '', { message: "authonImageUrl cannot be empty " }),

})