"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./input";
import useStore from "@/lib/cart";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "./use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Cart } from "../Cart";
import { useRouter } from "next/navigation";

export const ProductCard = ({ product }) => {
  const [size, setSize] = useState("");
  const { toast } = useToast();
  const { push } = useRouter();

  const addToCart = useStore((state) => state.addToCart); // Obtén la acción 'addToCart' de la tienda

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

  useEffect(() => {
    product &&
      product.talles.map(
        (e) => e.nombre.toLowerCase() == "m" && setSize(e.nombre)
      );
  }, []);
  return (
    <div className="flex justify-center ">
    <div className="w-10/12 ">
      <div className="flex flex-col bg-black items-center justify-center rounded-xl  ">
        <Card className="  bg-transparent border-none">
          <CardTitle className=" text-center  py-5">
            <span className="text-center w-10/12  p-2 bg-black/80 text-white font-geist tracking-tighter rounded-xl">
              {product.titulo}
            </span>
          </CardTitle>
          <CardContent
            className="h-[500px] md:h-[500px]  rounded-xl flex flex-col justify-end"
            style={{
              backgroundImage: `url(${product.images[0]})`,
              backgroundSize: "cover",
              backgroundPosition:'center'
            }}
          >
            <div>
              <div className="flex justify-around items-end mt-5">
                {product.precioDescuento ? (
                  <div className="flex items-end">
                    <p className="bg-white/80 mx-2 p-1 rounded-xl font-bold text-red-950 line-through tracking-tighter  text-xl">
                      {formatCurrency(product.precio)}
                    </p>
                    <p className="rounded-xl mx-2 p-1 mt-2 bg-white/80 text-green-700 font-bold tracking-tighter text-xl">
                      {formatCurrency(product.precioDescuento)}
                    </p>
                  </div>
                ) : (
                  <p className="text-white font-bold tracking-tighter text-xl">
                    {formatCurrency(product.precio)}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="pb-10">
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="my-5"
              onClick={() => push(`/product?_id=${product._id}`)}
            >
              Ver producto
            </Button>
          </div>
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
          <div className="flex w-full mt-5 justify-around  ">
            <Dialog>
              <DialogTrigger asChild>
                <Button className=" font-geist mx-1  tracking-tighter">
                  Comprar ahora
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>Formulario de envío</DialogTitle>
                  <DialogDescription>
                    <form>
                      <Input placeholder="Nombre" className="my-1" />
                      <Input placeholder="Apellido" className="my-1" />
                      <Input placeholder="Dirección" className="my-1" />
                      <Input placeholder="Número" className="my-1" />
                      <Input placeholder="Código postal" className="my-1" />
                      <Input placeholder="Localidad" className="my-1" />
                      <Input placeholder="Ciudad" className="my-1" />
                      <Input placeholder="Provincia" className="my-1" />
                      <Input placeholder="Celular" className="my-1" />
                      <div className="mt-5">
                        <Button type="submit">Enviar</Button>
                      </div>
                    </form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Button
              className=" font-geist mx-1  tracking-tighter"
              variant="outline"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
