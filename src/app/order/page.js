"use client";
import useFetchOrders from "@/hooks/useOrders";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { orders, loading, error } = useFetchOrders();
  const searchParams = useSearchParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    const _id = searchParams.get("_id");
    console.log(orders, _id);
    if (orders && _id) {
      const foundOrder = orders.find((e) => e._id === _id);
      setOrder(foundOrder);
      console.log(foundOrder);
    }
  }, [orders, searchParams]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {order && (
        <div className="mt-10">
          <span className="flex items-center justify-center font-bold text-center tracking-tighter font-geist text-6xl">
            Su pago fue procesado exitosamente
            <svg
              width={60}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  fill="#323232"
                  d="M13.818 4.545l-.19-.267a2 2 0 00-3.255 0l-.19.267a2 2 0 01-1.85.825l-.848-.094a2 2 0 00-2.209 2.209l.094.849a2 2 0 01-.825 1.848l-.267.19a2 2 0 000 3.255l.267.19a2 2 0 01.825 1.85l-.094.848a2 2 0 002.209 2.209l.849-.094a2 2 0 011.848.825l.19.267a2 2 0 003.255 0l.19-.267a2 2 0 011.85-.825l.848.094a2 2 0 002.209-2.209l-.094-.849a2 2 0 01.825-1.848l.267-.19a2 2 0 000-3.255l-.267-.19a2 2 0 01-.825-1.85l.094-.848a2 2 0 00-2.209-2.209l-.849.094a2 2 0 01-1.848-.825z"
                  opacity="0.1"
                ></path>
                <path
                  stroke="#323232"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.818 4.545l-.19-.267a2 2 0 00-3.255 0l-.19.267a2 2 0 01-1.85.825l-.848-.094a2 2 0 00-2.209 2.209l.094.849a2 2 0 01-.825 1.848l-.267.19a2 2 0 000 3.255l.267.19a2 2 0 01.825 1.85l-.094.848a2 2 0 002.209 2.209l.849-.094a2 2 0 011.848.825l.19.267a2 2 0 003.255 0l.19-.267a2 2 0 011.85-.825l.848.094a2 2 0 002.209-2.209l-.094-.849a2 2 0 01.825-1.848l.267-.19a2 2 0 000-3.255l-.267-.19a2 2 0 01-.825-1.85l.094-.848a2 2 0 00-2.209-2.209l-.849.094a2 2 0 01-1.848-.825z"
                ></path>
                <path
                  stroke="#323232"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l1.819 1.819v0c.1.1.262.1.362 0v0L15 10"
                ></path>
              </g>
            </svg>
          </span>
          <div className="flex justify-center">
            <p className="w-10/12 mt-10 tracking-tighter font-geist text-xl">
              Tu pedido con el código de seguimiento{" "}
              <span className="font-bold ">{order.codGestion} </span>está siendo
              procesado y estará listo para ser rastreado en las próximas 24/48
              horas. <br />
              <br />
              Podras rastrearlo{" "}
              <a
                className="underline font-light"
                href={`https://apis.urbano.com.ar/cespecifica/?shi_codigo=003575&cli_codigo=%20${order.codGestion}`}
              >
                aquí
              </a>
              . Recibiras un correo electrónico de confirmación una vez que tu
              paquete sea despachado.
            </p>
          </div>

          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {order.orderItems.map((e) => (
              <div
                key={e._id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "50px",
                  justifyContent: "center",
                }}
              >
                <img src={e.image} width={200} />
                <p style={{ fontSize: "20px", fontWeight: "600" }}>
                  {" "}
                  {e.title}
                </p>
                <p style={{ fontSize: "20px", fontWeight: "300" }}>
                  {" "}
                  Cantidad: {e.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Page;
