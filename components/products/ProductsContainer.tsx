import { fetchAllProduct } from "@/utils/action";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import Link from "next/link";
import { links } from "@/utils/link";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: any;
}) => {
  const totalProducts = await fetchAllProduct({search});
  const lengthProducts = totalProducts.length;
  const searchTerm = search ? `&search=${search}` : "";

  return (
    <>
      {/* header */}
      <section>
        <div className="flex justify-between items-center">
          <h4>
            {lengthProducts} Product{lengthProducts > 0 && "s"}
          </h4>
          <div className="flex gap-4">
            <Button
              asChild
              size={"icon"}
              variant={layout === "grid" ? "default" : "outline"}
            >
              <Link href={`${links.PRODUCTS.href}?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              asChild
              variant={layout === "list" ? "default" : "outline"}
              size={"icon"}
            >
              <Link href={`${links.PRODUCTS.href}?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* product */}
      <section>
        {lengthProducts === 0 ? (
          <h5>Sorry,No Products Matched Your Search</h5>
        ) : layout === "grid" ? (
          <ProductGrid products={totalProducts} />
        ) : (
          <ProductList products={totalProducts} />
        )}
      </section>
    </>
  );
};

export default ProductsContainer;
