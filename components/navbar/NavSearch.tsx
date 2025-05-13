"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { links } from "@/utils/link";
const NavSearch = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  

  const { replace } = useRouter();

  const handelSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams); 
    if (value) {
      params.set("search", value); 
    } else {
      params.delete("search");
    }
    replace(`${links.PRODUCTS.href}?${params.toString()}`);
  }, 300);

  return (
    <Input
      type="search"
      placeholder="Search ..."
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        setSearch(e.target.value);
        handelSearch(e.target.value);
      }}
    />
  );
};

export default NavSearch;
