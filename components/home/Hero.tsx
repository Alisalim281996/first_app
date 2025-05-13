import React, { Suspense } from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";
import { LoadingHero } from "../global/LoadingContainer";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-5xl tracking-tight sm:text-7xl">
          We are changing way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          esse, ex inventore repudiandae libero nemo iste enim repellat corrupti
          eius, neque sapiente ab ipsa voluptates consequatur eligendi dolores.
          At, quo.
        </p>

        <Button asChild className="mt-10 bg-blue-500 text-white" size="lg">
          <Link href={"/products"}>Our Products</Link>
        </Button>
      </div>
      <Suspense fallback={<LoadingHero />}>
        <HeroCarousel />
      </Suspense>
    </section>
  );
}

export default Hero;
