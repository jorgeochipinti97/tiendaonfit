"use client";
import { ProductCard } from "@/components/ui/ProductCard";
import { useProduct } from "@/hooks/useProducts";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { products } = useProduct();
  const [productos, setProductos] = useState([]);
  const searchParams = useSearchParams();
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    if (products) {
      const cat = searchParams.get("categoria");
      setCategoria(cat);
      if (categoria != "indumentaria") {
        setProductos(
          products.filter(
            (product) => product.categoria.toLowerCase() === cat?.toLowerCase()
          )
        );
      } else {
        setProductos(products.filter((e) => e.categoria == "hombres"));
      }
    }
  }, [products, searchParams]);

  return (
    <div className="">
      <div className="flex justify-around">
        <p className="text-center  font-bold text-xl  tracking-tighter">
          12 Cuotas sin interés{" "}
        </p>
        <p className="text-center  font-bold text-xl  tracking-tighter">
          Envio gratis a todo el país
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-20">
        {productos &&
          productos.map((e) => (
            <div key={e._id}>
              <ProductCard product={e} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
