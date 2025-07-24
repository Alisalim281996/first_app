import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { links } from "@/utils/link";
import { LuShoppingCart } from "react-icons/lu";
const CartButton = () => {
  const cartItems = 0;
  return (
    <Button
      asChild
      variant={"outline"}
      size={"icon"}
      className="flex justify-center items-center relative"
    >
      <Link href={links.Cart.href}>
        <LuShoppingCart />
        
        <span className="p-0 absolute -top-3 -right-3 bg-blue-500 text-white rounded-full w-6 h-6 flex justify-center items-center text-sm">
          {cartItems}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
