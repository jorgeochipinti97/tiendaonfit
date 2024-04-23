"use client";
import React, { useState } from "react";
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
export const ProductCard = ({ product }) => {
  const [size, setSize] = useState("");

  const addToCart = useStore((state) => state.addToCart); // Obtén la acción 'addToCart' de la tienda

  const handleAddToCart = () => {
    if (product.talles.length > 0 && !size) {
      alert("Por favor, selecciona un talle antes de añadir al carrito.");
      return;
    }
    addToCart(product, 1, size); // Añade el producto al carrito
    alert("Producto añadido al carrito");
  };

  return (
    <div className="flex justify-center">
      <Card className=" mx-5  bg-black w-11/12">
        <CardTitle className="font-geist text-white text-md md:text-xl uppercase font-bold mt-5 text-center  tracking-tighter">
          {product.titulo}
        </CardTitle>
        <CardContent>
          <div className="flex justify-center mt-5">
            <img
              src={product.images[0]}
              className="h-[300px] md:h-[500px] rounded-xl"
            />
          </div>
          <div className="flex justify-around items-end mt-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className=" font-geist mx-1  tracking-tighter"
                >
                  Ver descripción
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>{product.titulo}</DialogTitle>
                  <DialogDescription>
                    <div
                      className="dialog-description"
                      dangerouslySetInnerHTML={{ __html: product.descripcion }}
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <p className="text-white font-bold tracking-tighter text-xl">
              {formatCurrency(product.precio)}
            </p>
          </div>
          <div className="mt-5">
            {product.talles.map(
              (t) =>
                t.stock > 0 && (
                  <Button
                    variant={size == t.nombre ? "" : "outline"}
                    className="font-mono uppercase mx-1"
                    onClick={() => setSize(t.nombre)}
                  >
                    {t.nombre}
                  </Button>
                )
            )}
          </div>

          <CardFooter>
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
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};
