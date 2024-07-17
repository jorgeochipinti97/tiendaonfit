"use client";
import { ProductCard } from "@/components/ui/ProductCard";
import { SliderCards } from "@/components/ui/Sliders/Cards";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";

export default function Home() {
  const { products } = useProduct();
  const { push } = useRouter();

  return (
    <div style={{ backgroundSize: "cover" }} className="h-fit  bg-white pb-56">
      <p className="text-center opacity-70 font-geist tracking-tighter font-bold text-3xl mx-2 md:text-7xl py-5 md:py-10  ">
        Elevá tu estilo, potenciá tu rendimiento
      </p>
      <div className="flex justify-center ">
        <p className="bg-black w-fit rounded-xl  items-center flex font-bold font-geist tracking-tighter text-2xl md:mx-0 text-center mx-5 md:text-4xl text-yellow-300 p-3">
          12 Cuotas sin interes y envio gratis a todo el país.
        </p>
      </div>
      <p className="text-center tracking-tighter mx-2 fontg-geist mt-5 text-xl md:text-3xl font-bold">
        Como si fuera poco, con tu compra te llevas un regalito de OnFit...
      </p>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 w-screen mt-5 md:mt-20">
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
        <div className="flex justify-center ">
          <img
            src="/sale.jpeg"
            className="w-11/12 md:w-8/12 my-10 rounded-xl"
          />
        </div>
      </div> */}

      <div>
        <p className="font-geist tracking-tighter font-bold text-4xl md:text-7xl mt-10  opacity-50 ml-5 mb-5 ">
          Descubre nuestras Remeras Oversize
        </p>
        <ScrollArea className="  rounded-md border">
          <div className="flex max-w-screen">
            {products &&
              products
                .filter((r) => r.subcategoria == "remera_oversize")
                .map((e) => (
                  <div key={e._id}>
                    <ProductCard product={e} />
                  </div>
                ))}
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
      </div>


      {/* <div className="flex justify-around my-10 rounded-xl">
        <video
          src="https://dtkw3k8jwufs8.cloudfront.net/onfit.MOV"
          loop
          playsInline
          autoPlay
          muted
          className="w-10/12 md:w-3/12 rounded-xl   "
        />

        <video
          src="https://dtkw3k8jwufs8.cloudfront.net/buzos.MOV"
          loop
          playsInline
          autoPlay
          muted
          className="w-3/12 rounded-xl hidden md:block  "
        />
      </div> */}

      <div className="">
        <p className="font-geist tracking-tighter font-bold text-4xl md:text-7xl mb-5 mt-20  opacity-50 ml-5 ">
          Nuestros buzos
        </p>

        <div className="flex max-w-screen ">
          <div className="md:flex  w-screen justify-center hidden ">
            {products &&
              products
                .filter((r) => r.subcategoria == "buzo")
                .map((e) => (
                  <div key={e._id}>
                    <ProductCard product={e} />
                  </div>
                ))}
          </div>
        <ScrollArea className="  rounded-md border md:hidden  block">
          <div className="flex max-w-screen">
            {products &&
              products
                .filter((r) => r.subcategoria == "buzo")
                .map((e) => (
                  <div key={e._id}>
                    <ProductCard product={e} />
                  </div>
                ))}
            <ScrollBar orientation="horizontal" />
          </div>
        </ScrollArea>
        </div>
      </div>
  
      <section className="mt-20">
        <div className="flex justify-start items-center w-screen flex-col">
          <div>
            <p className="font-geist font-bold tracking-tighter text-4xl md:text-7xl mb-5  opacity-50 mx-5 ">
              Se parte de la familia OnFit
            </p>
          </div>
          <video
            src="https://dtkw3k8jwufs8.cloudfront.net/end.mp4"
            loop
            autoPlay
            muted
            playsInline
            className=" w-10/12 rounded-xl hidden md:block"
          />
          <video
            src="https://dtkw3k8jwufs8.cloudfront.net/end.mp4"
            loop
            autoPlay
            muted
            playsInline
            className=" w-10/12 rounded-xl block md:hidden"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            onClick={() => push("/products?categoria=indumentaria")}
            size="lg"
          >
            {" "}
            Ver productos{" "}
          </Button>
        </div>
      </section>
    </div>
  );
}
