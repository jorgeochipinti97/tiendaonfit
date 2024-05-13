import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
 
import { EffectCoverflow } from "swiper/modules";
import { ProductCard } from "../ProductCard";

export const SliderCoverflow = ({ products, initialSlide }) => {
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
      initialSlide={initialSlide ? initialSlide : 0}
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
      {products &&
        products.map((e, index) => (
          <SwiperSlide className="py-2" key={index}>
            <ProductCard product={e} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
