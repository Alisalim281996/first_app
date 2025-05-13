import React from "react";
import SectionTitle from "../global/SectionTitle";
import ProductGrid from "../products/ProductGrid";
import { fetchFeaturedProducts } from "@/utils/action";
import EmptyList from "../global/EmptyList";

const FeaturedProducts = async () => {

  
  const productFeatcure = await fetchFeaturedProducts();


  if (productFeatcure.length === 0)
    return <EmptyList title="Add New Products" />;

  // if not zero we return that  
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductGrid products={productFeatcure} />
    </div>
  );
};

export default FeaturedProducts;
