import { cn } from "@/lib/utils";
import React from "react";

type EmptyLisrProps = {
  title: string;
  className?: string;
};

const EmptyList = ({ title, className }: EmptyLisrProps) => {
  return <h2 className={cn("text-xl", className)}>{title}</h2>;
};

export default EmptyList;
