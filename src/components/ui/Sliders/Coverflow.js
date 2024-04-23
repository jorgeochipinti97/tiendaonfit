import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper/modules";
import { ProductCard } from "../ProductCard";

export const SliderCoverflow = ({ products }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1} // Default to mobile view
      breakpoints={{
        640: { // Adjust this value based on when you want the desktop settings to apply
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
      className="mySwiper py-10"
    >
      {products &&
        products.map((e,index) => (
          <SwiperSlide className="py-10" key={index}>
            <ProductCard product={e} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
