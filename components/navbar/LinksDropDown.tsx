import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { dropDownMenuLinks} from "@/utils/link";
import { Button } from "../ui/button";
const LinksDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        {dropDownMenuLinks.map((link) => (
          <DropdownMenuItem key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropDown;
