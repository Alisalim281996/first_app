import SectionTitle from "@/components/global/SectionTitle";
import ProductGrid from "@/components/products/ProductGrid";
import { fetchUserFav } from "@/utils/action";
import React from "react";

const FavoritesPage = async () => {
  const favorites = await fetchUserFav();
  if (favorites.length === 0)
    return <SectionTitle text="You Have No Favorites Yet" />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductGrid
        products={favorites
          .map((fav) => fav.product)
          .filter(
            (product): product is NonNullable<typeof product> =>
              product !== null
          )}
      />
    </div>
  );
};

export default FavoritesPage;
