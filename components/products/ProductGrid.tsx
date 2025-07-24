import { links } from "@/utils/link";
import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductGrid = ({ products }: { products: (Product[]) }) => {
  return (
    <section className="pt-12 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      {products.map((product) => {
        const productId = product.id;
        const dolarAmount = formatCurrency(product.price);

        return (
          <div className="group relative" key={product.id}>
            <Link href={`${links.PRODUCTS.href}/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent>
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      src={product.image}
                      alt="products_img"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize">{product.name}</h2>
                    <p className="text-muted-foreground mt-2">{dolarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductGrid;
