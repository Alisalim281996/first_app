import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductReview from "@/components/raview/ProductReview";
import SubmitReview from "@/components/raview/SubmitReview";
import AddtoCart from "@/components/single-product/AddtoCart";
import { BreadCrumbs } from "@/components/single-product/BreadCrumbs";
import ProductRating from "@/components/single-product/ProductRating";
import { fetchSingleProduct } from "@/utils/action";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import React from "react";

async function ProdcutDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const product = await fetchSingleProduct(id);

    const dollarAmount = formatCurrency(product.price);
    return (
      <>
        <section>
          <BreadCrumbs name={product.name} />
          <div className="grid lg:grid-cols-2 mt-6 gap-y-6 lg:gap-x-16">
            <div className="relative h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="w-full rounded-md object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <div className="flex gap-x-8 items-center">
                <h2 className="capitalize text-3xl font-bold">
                  {product.name}
                </h2>
                <FavoriteToggleButton productId={product.id} />
              </div>
              <ProductRating productId={product.id} />
              <h4 className="text-md p-2 mt-3 rounded-md bg-muted inline-block">
                {dollarAmount}
              </h4>
              <p className="mt-6 text-md leading-8">{product.description}</p>
              <AddtoCart productId={product.id} />
            </div>
          </div>
        </section>
        <ProductReview productId={id} />
        <SubmitReview productId={id} />
      </>
    );
  } catch (error) {
    return (
      <section>
        <h1>Product Not Found</h1>
      </section>
    );
  }
}

export default ProdcutDetailsPage;
