import ProductsContainer from "@/components/products/ProductsContainer";
import React from "react";

interface ProductPageProps {
  searchParams: {
    layout?: string;
    search?: string;
  };
}

async function ProjectsPage({ searchParams }: ProductPageProps) {
  const { layout = "grid" } = (await searchParams) || {};
  const { search } = (await searchParams) || "";

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProjectsPage;
