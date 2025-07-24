"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const SignOutLink = () => {
  function handelLogOut() {
    toast("Sign Out ...");
  }

  return (
    <SignOutButton>
      <Link href={"/"} className="w-full text-left" onClick={handelLogOut}>
        Sign Out
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
