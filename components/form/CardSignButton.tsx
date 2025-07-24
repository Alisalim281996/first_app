import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";

const CardSignButton = () => {
  return (
    <div>
      <SignInButton mode="modal">
        <Button
          type="button"
          size={"icon"}
          variant={'ghost'}
          asChild
          className="cursor-pointer bg-gray-800 hover:cursor-pointer hover:bg-gray-700 text-white shadow-md transition duration-300"
        >
          <FaRegHeart />
        </Button>
      </SignInButton>
    </div>
  );
};

export default CardSignButton;
