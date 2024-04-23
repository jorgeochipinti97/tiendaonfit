"use client";
import { SliderCards } from "@/components/ui/Sliders/Cards";
import { SliderCoverflow } from "@/components/ui/Sliders/Coverflow";

import { useProduct } from "@/hooks/useProducts";

import { useEffect } from "react";

export default function Home() {
  const { products } = useProduct();
  useEffect(() => {
    products && console.log(products);
  }, [products]);
  return (
    <div style={{ backgroundSize: "cover" }} className="h-fit">
      <p className="text-center opacity-70 font-geist tracking-tighter font-bold text-3xl mx-2 md:text-7xl py-5 md:py-10 ">
        Elevá tu estilo, potenciá tu rendimiento
      </p>
      <div className="flex justify-center ">
        <p className="bg-black w-fit rounded-xl  items-center flex font-bold font-geist tracking-tighter text-2xl md:mx-0 text-center mx-5 md:text-4xl text-yellow-300 p-3">
          3 Cuotas sin interes y envio gratis a todo el país.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen mt-5 md:mt-20">
        <div className="flex justify-center">
          <video
            src="/videovertical.mp4"
            muted
            autoPlay
            playsInline
            loop
            className="w-10/12 md:w-5/12"
          />
        </div>
        <div className="flex justify-center items-center mt-5 md:mt-0 ">
          <div className="w-9/12 md:w-7/12">
            <SliderCards />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap py-10">
        {products && <SliderCoverflow products={products} />}
      </div>
    </div>
  );
}
