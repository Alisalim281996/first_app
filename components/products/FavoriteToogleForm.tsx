import React from "react";
import FormContiner from "../form/FormContiner";
import { tooglefavAction } from "@/utils/action";
import CardSubmitButton from "../form/CardSubmitButton";

type toggleFavActionProps = {
  productId: string;
  favoriteId: string | null;
};

const FavouritToogleForm = ({
  productId,
  favoriteId,
}: toggleFavActionProps) => {
 ;
  const toggleAction = tooglefavAction.bind(null, {
    productId,
    favoriteId,
  });

  return (
    <FormContiner action={toggleAction}>
      <CardSubmitButton isFav={favoriteId ? true : false} />
    </FormContiner>
  );
};

export default FavouritToogleForm;
