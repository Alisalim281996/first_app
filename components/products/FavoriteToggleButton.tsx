import React from "react";
import { auth } from "@clerk/nextjs/server";
import CardSignButton from "../form/CardSignButton";
import FavouritToogleForm from "./FavoriteToogleForm";
import { fetchFavId } from "@/utils/action";
const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
  const { userId } = await auth();
  if (!userId) return <CardSignButton />;

  const fetchId = await fetchFavId(productId);

  return <FavouritToogleForm productId={productId} favoriteId={fetchId} />;
};

export default FavoriteToggleButton;
