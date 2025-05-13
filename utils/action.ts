"use server"

import { redirect } from "next/navigation"
import db from "./db"

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
            // id from database === id from productId
        }
    })
    if (!product) {
        redirect('products')
    }

    return product
}