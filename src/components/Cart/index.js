"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";

import { formatCurrency } from "@/lib/utils";
import useStore from "@/lib/cart";
import { CheckoutForm } from "../forms/CheckoutForm";

export const Cart = ({ isToast }) => {
  const products = useStore((state) => state.getProducts()); // Usar el selector para obtener los productos
  const totalItems = useStore((state) => state.getTotalItems()); // Obtener el total de productos
  const total = useStore((state) => state.getTotal()); // Obtener el total monetario del carrito
  const incrementarCantidad = useStore((state) => state.increaseQuantity);
  const removerProducto = useStore((state) => state.removeFromCart);

  const decrementarCantidad = useStore((state) => state.decreaseQuantity);

  return (
    <Dialog className="z-50">
      <DialogTrigger asChild>
        <Button variant="icon" className="bg-black/70 border border-white">
          {isToast ? (
            <p className="text-white">Ver Carrito</p>
          ) : (
            <div>
              <span className="bg-sky-50 border border-black px-2 text-black  absolute bottom-8 right-10 text-md font-geist rounded-full">
                {totalItems}
              </span>
              <svg
                width={25}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g>
                  <path
                    fill="#f5f5f7"
                    d="M4.97 9.81A2 2 0 016.961 8H17.04a2 2 0 011.99 1.81l.762 8a2 2 0 01-1.99 2.19H6.2a2 2 0 01-1.991-2.19l.761-8z"
                    opacity="0.15"
                  ></path>
                  <path
                    stroke="#f5f5f7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 8h1.16a2 2 0 011.993 1.834l.667 8A2 2 0 0117.826 20H6.174a2 2 0 01-1.993-2.166l.666-8A2 2 0 016.84 8H8m8 0H8m8 0V7a4 4 0 10-8 0v1m8 0v4M8 8v4"
                  ></path>
                </g>
              </svg>
            </div>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Carrito</DialogTitle>
        </DialogHeader>
        <DialogDescription className="">
          <div className="flex justify-center w-full">
            <Table className="w-12/12">
              <TableHeader>
                <TableRow>
                  <TableHead>-</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead className="">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((producto) => (
                  <TableRow key={producto.titulo}>
                    <TableCell className="text-xs">{producto.titulo}</TableCell>
                    <TableCell className="text-center">
                      {formatCurrency(producto.precio)}
                    </TableCell>
                    <TableCell className="text-center">
                      {producto.quantity}
                    </TableCell>
                    <TableCell className="">
                      <div className="flex">
                        <Button
                          variant="outline"
                          className=""
                          onClick={() =>
                            incrementarCantidad(producto._id, producto.size)
                          }
                        >
                          +
                        </Button>
                        <Button
                          variant="outline"
                          className=""
                          onClick={() =>
                            decrementarCantidad(producto._id, producto.size)
                          }
                        >
                          -
                        </Button>
                      </div>
                      <Button
                        className="mt-2"
                        variant="outline"
                        onClick={() =>
                          removerProducto(producto._id, producto.size)
                        }
                      >
                        Quitar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-2 flex flex-col items-start">
            <p className="font-geist tracking-tighter my-1">
              Total :{" "}
              <span className="font-bold ml-1 my-1">
                {total ? formatCurrency(total) : 0}
              </span>
            </p>
          </div>
          <div className="flex justify-start">
            <CheckoutForm />
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>

    // <AlertDialog className="z-50">
    //   <AlertDialogTrigger asChild>
    //     <Button variant="icon" className="bg-black/70 border border-white">
    //       {isToast ? (
    //         <p className="text-white">Ver Carrito</p>
    //       ) : (
    //         <div>
    //           <span className="bg-sky-50 border border-black px-2 text-black  absolute bottom-8 right-10 text-md font-geist rounded-full">
    //             {totalItems}
    //           </span>
    //           <svg
    //             width={25}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //           >
    //             <g>
    //               <path
    //                 fill="#f5f5f7"
    //                 d="M4.97 9.81A2 2 0 016.961 8H17.04a2 2 0 011.99 1.81l.762 8a2 2 0 01-1.99 2.19H6.2a2 2 0 01-1.991-2.19l.761-8z"
    //                 opacity="0.15"
    //               ></path>
    //               <path
    //                 stroke="#f5f5f7"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="1.5"
    //                 d="M16 8h1.16a2 2 0 011.993 1.834l.667 8A2 2 0 0117.826 20H6.174a2 2 0 01-1.993-2.166l.666-8A2 2 0 016.84 8H8m8 0H8m8 0V7a4 4 0 10-8 0v1m8 0v4M8 8v4"
    //               ></path>
    //             </g>
    //           </svg>
    //         </div>
    //       )}
    //     </Button>
    //   </AlertDialogTrigger>
    //   <AlertDialogContent>
    //     <AlertDialogHeader>
    //       <AlertDialogTitle>Carrito</AlertDialogTitle>
    //       <AlertDialogDescription className=''>
    //         <div className="flex justify-center w-full">
    //           <Table className="w-12/12">
    //             <TableHeader>
    //               <TableRow>
    //                 <TableHead >-</TableHead>
    //                 <TableHead>Precio</TableHead>
    //                 <TableHead>Cantidad</TableHead>
    //                 <TableHead className="">Acciones</TableHead>
    //               </TableRow>
    //             </TableHeader>
    //             <TableBody>
    //               {products.map((producto) => (
    //                 <TableRow key={producto.titulo}>
    //                   <TableCell className="text-xs">
    //                     {producto.titulo}
    //                   </TableCell>
    //                   <TableCell className="text-center">
    //                     {formatCurrency(producto.precio)}
    //                   </TableCell>
    //                   <TableCell className="text-center">
    //                     {producto.quantity}
    //                   </TableCell>
    //                   <TableCell className="">
    //                     <div className="flex">
    //                       <Button
    //                         variant="outline"
    //                         className=""
    //                         onClick={() =>
    //                           incrementarCantidad(producto._id, producto.size)
    //                         }
    //                       >
    //                         +
    //                       </Button>
    //                       <Button
    //                         variant="outline"
    //                         className=""
    //                         onClick={() =>
    //                           decrementarCantidad(producto._id, producto.size)
    //                         }
    //                       >
    //                         -
    //                       </Button>
    //                     </div>
    //                     <Button
    //                       className="mt-2"
    //                       variant="outline"
    //                       onClick={() =>
    //                         removerProducto(producto._id, producto.size)
    //                       }
    //                     >
    //                       Quitar
    //                     </Button>
    //                   </TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </div>
    //         <div className="mt-2 flex flex-col items-start">
    //           <p className="font-geist tracking-tighter my-1">
    //             Total :{" "}
    //             <span className="font-bold ml-1 my-1">
    //               {total ? formatCurrency(total) : 0}
    //             </span>
    //           </p>
    //         </div>
    //         <div className="flex justify-start">
    //         <CheckoutForm />
    //         </div>
    //       </AlertDialogDescription>
    //     </AlertDialogHeader>
    //     <AlertDialogFooter>
    //       <AlertDialogCancel>Cancel</AlertDialogCancel>
    //     </AlertDialogFooter>
    //   </AlertDialogContent>
    // </AlertDialog>
  );
};
