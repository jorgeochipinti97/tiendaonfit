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
    <div>
      <p className="text-start ml-5 font-bold text-4xl  tracking-tighter">
        3 Cuotas sin interés{" "}
      </p>
      <p className="text-start ml-5 font-bold text-4xl  tracking-tighter">
        Envio gratis a todo el país
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-20">
        {productos && productos.map((e) => <ProductCard product={e} />)}
      </div>
    </div>
  );
};

export default Page;
