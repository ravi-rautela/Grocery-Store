import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = async ({ sliderList }) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => (
          <CarouselItem key={index}>
            <Image
              src={
                process.env.NEXT_PUBLIC_BASE_URL +
                slider.attributes?.icon?.data[0].attributes.url
              }
              width={500}
              height={400}
              alt="slider"
              className="w-full h-[200px] md:h-[400px] rounded-2xl object-cover "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
