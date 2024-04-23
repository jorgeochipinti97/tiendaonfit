"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

export const SliderCards = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="rounded-xl" src="1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl" src="2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl" src="3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl" src="4.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="rounded-xl" src="5.png" />
      </SwiperSlide>
    </Swiper>
  );
};
