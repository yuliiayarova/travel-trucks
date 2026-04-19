"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import css from "./Gallery.module.css";
import Image from "next/image";
import { GetCamperByIdResponse } from "@/lib/api";

interface GalleryProps {
  camper: GetCamperByIdResponse;
}

export default function Gallery({ camper }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={css.container}>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {camper.gallery.map((image, index) => (
          <SwiperSlide key={image.original}>
            <Image
              src={image.original}
              alt={`${camper.name} - image ${index + 1}`}
              width={638}
              height={505}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={32}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbSwiper}
      >
        {camper.gallery.map((image) => (
          <SwiperSlide key={image.thumb}>
            <div className={css.thumbImgWrapper}>
              <Image
                className={css.thumbImg}
                src={image.thumb}
                alt={`Thumb ${camper.name}`}
                width={136}
                height={144}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
