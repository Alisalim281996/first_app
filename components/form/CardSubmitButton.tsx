"use client"

import React from "react";
import { useFormStatus } from "react-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const CardSubmitButton = ({ isFav }: { isFav: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        type="submit"
        size={"icon"}
        className="p-3 cursor-pointer bg-gray-800 hover:cursor-pointer hover:bg-gray-700 text-white shadow-md transition duration-300"
      >
        {pending ? (
          <Loader2 className="animate-spin w-3 h-3" />
        ) : isFav ? ( 
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </Button>
    </div>
  );
};

export default CardSubmitButton;
