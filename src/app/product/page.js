"use client";
import { Cart } from "@/components/Cart";
import EmblaCarousel from "@/components/ui/Sliders/Emblacarousel/Emblacarousel";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useProduct } from "@/hooks/useProducts";
import useStore from "@/lib/cart";
import { formatCurrency } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [size, setSize] = useState("");
  const { toast } = useToast();
  const { push } = useRouter();
  const addToCart = useStore((state) => state.addToCart); // Obtén la acción 'addToCart' de la tienda

  const searchParams = useSearchParams();
  const { products } = useProduct();
  const [product, setProduct] = useState();
  useEffect(() => {
    const _id = searchParams.get("_id");

    searchParams && console.log(_id);
    products &&
      searchParams &&
      setProduct(products.filter((e) => e._id == _id)[0]);
  }, [products, searchParams]);

  const OPTIONS = { loop: true };

  useEffect(() => {
    product &&
      product.talles.map(
        (e) => e.nombre == "M" && setSize(e.nombre)
      );
  }, [product]);

  const handleAddToCart = () => {
    // if (product.talles.length > 0 && !size || product.categoria != 'indumentaria' ) {
    //   alert("Por favor, selecciona un talle antes de añadir al carrito.");
    //   return;
    // }

    toast({
      title: "Producto agregado al carrito correctamente",
      description: "OnFit te espera!",
      action: (
        <ToastAction asChild altText="Goto schedule to undo">
          <Cart isToast={true} />
        </ToastAction>
      ),
    });

    addToCart(product, 1, size); // Añade el producto al carrito
  };

  return (
    <div>
      <div className="fixed bottom-0 bg-black/90 w-screen flex justify-center py-2 z-50">
        <p className="font-bold text-white text-center font-geist tracking-tighter text-2xl md:text-4xl">
          Envio gratis  3 cuotas sin interés
        </p>
      </div>
      <div className="pb-20">
        {product && (
          <div>
            <div className="m-5">
              <p className="text-black/60 text-center text-4xl md:text-7xl font-bold capitalize tracking-tighter font-geist ">
                {product.titulo}
              </p>
            </div>
            <EmblaCarousel images={product.images} options={OPTIONS} />
            <div className="mx-2">
              {product.precioDescuento ? (
                <div>
                  <div className="flex justify-center">
                    <p className="font-geist tracking-tighter font-bold text-3xl md:text-5xl mx-5 text-red-950 text-center line-through">
                      {formatCurrency(product.precio)}
                    </p>
                    <p className="font-geist tracking-tighter font-bold text-3xl md:text-5xl text-green-950 mx-5 text-center ">
                      {formatCurrency(product.precioDescuento)}
                    </p>
                  </div>
                  <div>
                    <p className="text-center font-geist tracking-tighter font-bold mt-5 text-xl">
                      Llevala en 3 cuotas sin interés de{" "}
                      {formatCurrency(product.precioDescuento / 3)}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <p className="font-geist tracking-tighter font-bold text-5xl text-center">
                      {formatCurrency(product.precio)}
                    </p>
                    <p className="text-center font-geist tracking-tighter font-bold mt-5 text-xl">
                      Llevala en 3 cuotas sin interés de{" "}
                      {formatCurrency(product.precio / 3)}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-center mt-5">
              {product.talles.map(
                (t, index) =>
                  t.stock > 0 && (
                    <Button
                      key={index}
                      variant={size == t.nombre ? "" : "outline"}
                      className="font-mono uppercase mx-1 border-black"
                      onClick={() => setSize(t.nombre)}
                    >
                      {t.nombre}
                    </Button>
                  )
              )}
            </div>
            <div className="flex justify-center  my-5">
              <Button variant="outline" className="mx-5">
                Agregar al carrito
              </Button>
              <Button className="mx-5">Comprar ahora</Button>
            </div>

            <div className=" flex justify-center ">
              <div
                className="w-10/12 md:w-6/12 font-geist tracking-tighter"
                dangerouslySetInnerHTML={{ __html: product.descripcion }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
