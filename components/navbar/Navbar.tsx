import React, { Suspense } from "react";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";

import LinksDropDown from "./LinksDropDown";
import Containers from "../global/Containers";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Containers className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex justify-center gap-4 items-center">
          <CartButton />
          <ModeToggle />
          <LinksDropDown />
        </div>
      </Containers>
    </nav>
  );
};

export default Navbar;
