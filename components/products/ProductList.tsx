import { links } from "@/utils/link";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductList = ({ products }: { products: Product[] }) => {
  

  
  return (
    <section className="mt-12 grid gap-y-4">
      {products.map((product) => {
        const priceFormat = formatCurrency(product.price);

        return (
          <div className="relative group" key={product.id}>
            <Link href={`${links.PRODUCTS.href}/${product.id}`}>
              <Card className="transform group-hover:shadow-lg transition-shadow duration-500">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={product.image}
                      alt={`${product.image}-list`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                  <div className="w-64">
                    <h2 className="text-xl font-semibold capitalize">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mt-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="text-xl flex gap-4 items-center md:flex-col justify-between text-center font-semibold text-blue-200">
                    <p>{priceFormat}</p>
                    <div className="">
                      <FavoriteToggleButton productId={product.id} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default ProductList;
