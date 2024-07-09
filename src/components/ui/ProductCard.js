"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

import useStore from "@/lib/cart";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "./use-toast";
import { useRouter } from "next/navigation";
import { PaymentForm } from "../forms/PaymentForm";
import { AddressForm } from "../forms/AddressForm";
import gsap from "gsap";

export const ProductCard = ({ product }) => {
  const [size, setSize] = useState("");
  const { toast } = useToast();
  const { push } = useRouter();
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    toast({
      title: "Producto agregado al carrito correctamente",
      description: "Completa tu compra",
    });
    addToCart(product, 1, size);
  };

  useEffect(() => {
    product &&
      product.talles.map(
        (e) => e.nombre.toLowerCase() == "m" && setSize(e.nombre)
      );
  }, []);
  const mensaje = `Hola! te consulto por ${product.titulo}`;
  const mensajeUrlEncoded_ = encodeURIComponent(mensaje);
  const enlaceWaLink_ = `https://wa.me/5491132856744?text=${mensajeUrlEncoded_}`;
  return (
    <div className="flex justify-center  m-2">
      <div
        className="w-[300px] md:w-[400px] "
        onClick={() => push(`/product?_id=${product._id}`)}
      >
        <div className="flex flex-col bg-black items-center justify-center rounded-xl  ">
          <Card className="  bg-transparent w-10/12 border-none">
            <CardTitle className=" font-geist text-center text-xl text-white py-5  ">
              {product.titulo}

            </CardTitle>
            <CardContent
              className="h-[300px] md:h-[400px]  rounded-xl flex flex-col justify-end"
              style={{
                backgroundImage: `url(https://tiendaonfit.s3.amazonaws.com/${product.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div>
                <div className="flex justify-around items-end mt-5">
                  {product.precioDescuento ? (
                    <div className="flex items-end">
                      <p className="bg-white/80 mx-2 p-1 rounded-xl font-bold text-red-950 line-through tracking-tighter  text-xl">
                        {formatCurrency(product.precio)}
                      </p>
                      <p className="rounded-xl mx-2 p-1 mt-2 bg-white/90 text-green-700 font-bold tracking-tighter text-xl">
                        {formatCurrency(product.precioDescuento)}
                      </p>
                    </div>
                  ) : (
                    <p className="rounded-xl mx-2 p-1 mt-2 bg-white/90 text-green-700 font-bold tracking-tighter text-xl">
                      {" "}
                      {formatCurrency(product.precio)}
                    </p>
                  )}
                </div>

              </div>
            </CardContent>
          </Card>
          <div className="pb-10">
            <p className="text-white font-geist font-semibold text-md tracking-tighter mt-2 text-center">
              Llevalo por 12 cuotas de{" "}
              {formatCurrency(
                product.precioDescuento
                  ? product.precioDescuento / 12
                  : product.precio / 12
              )}
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="my-5"
                onClick={() => push(`/product?_id=${product._id}`)}
              >
                Ver producto
              </Button>
            </div>
            {product.categoria != "accesorios" && (
              <div className="flex justify-center mt-5">
                {product.talles.map(
                  (t, index) =>
                    t.stock > 0 && (
                      <Button
                        key={index}
                        variant={size == t.nombre ? "" : "outline"}
                        className="font-mono uppercase mx-1"
                        onClick={() => setSize(t.nombre)}
                      >
                        {t.nombre}
                      </Button>
                    )
                )}
              </div>
            )}

            <div className="flex w-full mt-5 justify-start  ">
              {product.categoria != "equipamiento" ? (
                <Button
                  className=" font-geist mx-1  tracking-tighter"
                  onClick={handleAddToCart}
                >
                  Agregar al carrito
                </Button>
              ) : (
                <Button onClick={() => push(enlaceWaLink_)}>
                  Consultar ahora
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // 5491132856744
  );
};
