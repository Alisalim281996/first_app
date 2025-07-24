"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon, LucideEdit2, LucideTrash2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

type actionType = "edit" | "delete";

const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();
  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LucideEdit2 />;
      case "delete":
        return <LucideTrash2 />;
      default:
        throw new Error(`Invalid Action Type ${actionType}`);
    }
  };
  return (
    <Button
      type="submit"
      size={"icon"}
      variant={"link"}
      className="p-2 cursor-pointer"
    >
      {pending ? <Loader2Icon className="animate-spin"/> : renderIcon()}
    </Button>
  );
};

export default IconButton;
