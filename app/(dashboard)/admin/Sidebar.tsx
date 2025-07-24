"use client";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBarComponent = () => {
  const path_Url = usePathname();

  return (
    <aside>
      {adminLinks.map(function (value) {
        const active_page = value.href === path_Url;

        return (
          <Button
            key={value.name}
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={active_page ? "default" : "ghost"}
          >
            <Link href={value.href}>{value.name}</Link>
          </Button>
        );
      })}
    </aside>
  );
};

export default SideBarComponent;
