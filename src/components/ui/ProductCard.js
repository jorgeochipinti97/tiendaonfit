"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { formatCurrency } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Skeleton } from "./skeleton";

export const ProductCard = ({ product,isLoading }) => {
  const { push } = useRouter();

  if (isLoading)
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] bg-black w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-black" />
          <Skeleton className="h-4 w-[200px] bg-black" />
        </div>
      </div>
    );

  return (
    <div className="flex justify-center items-center m-2">
      <div
        className="w-[300px] md:w-[350px] cursor-pointer "
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
                backgroundImage: `url(https://dtkw3k8jwufs8.cloudfront.net/${product.images[0]})`,
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
          </div>
        </div>
      </div>
    </div>
    // 5491132856744
  );
};
