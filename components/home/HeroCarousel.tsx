import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import db from "@/utils/db";

import Image from "next/image";

const HeroCarousel = async () => {
  const hero = await db.hero.findMany();
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {hero.map((item) => (
              <CarouselItem key={item.id} className="w-full h-[500px]">
                <Image
                  src={item.image}
                  width={1000}
                  height={500}
                  alt=""
                  className="object-cover object-center"
                  priority
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
