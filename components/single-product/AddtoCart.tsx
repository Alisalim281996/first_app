import React from "react";
import { Button } from "../ui/button";

const AddtoCart = ({ productId }: { productId: string }) => {
  return (
    <Button className="capitalize mt-8" size={"lg"}>
      Add to Cart
    </Button>
  );
};

export default AddtoCart;
