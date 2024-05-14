'use client'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
 
import { EffectCoverflow } from "swiper/modules";
import { ProductCard } from "../ProductCard";

export const SliderCards = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1} // Default to mobile view
      breakpoints={{
        640: {
          // Adjust this value based on when you want the desktop settings to apply
          slidesPerView: 3.5,
        },
      }}

      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      className="mySwiper "
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
