import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { links } from "@/utils/link";
const Logo = () => {
  return (
    <Button size={"icon"} asChild>
      <Link href={links.Home.href}>AL</Link>
    </Button>
  );
};

export default Logo;
