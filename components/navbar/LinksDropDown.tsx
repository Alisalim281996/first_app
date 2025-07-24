import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { dropDownMenuLinks } from "@/utils/link";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import SignOutLink from "./SignOutLink";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const LinksDropDown = async () => {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <SignedOut>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <Button className="w-full">Sign in</Button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <Button className="w-full" variant={"outline"}>
                Sign Up
              </Button>
            </SignUpButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </SignedOut>

      <SignedIn>
        {/* if sign in show that */}
        <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
          {dropDownMenuLinks.map((link) => {
            if (link.name === "Dashboard" && !isAdmin) return null;
            return (
              <DropdownMenuItem key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </SignedIn>
    </DropdownMenu>
  );
};

export default LinksDropDown;
