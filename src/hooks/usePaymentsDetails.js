"use client";
import { useState } from "react";

function usePaymentDetails() {
  const [paymentDetails, setPaymentDetails] = useState({
    tarjetaSeleccionada: "",
    numeroTarjeta: "",
    mesExpiracion: "",
    anioExpiracion: "",
    codigoSeguridad: "",
    nombreTitular: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
    cuotas: 1,
    discountCode: "-",
    total: "-",
    discountTotal: "-",
  });

  const updatePaymentDetails = (newData) => {
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      ...newData,
    }));
    console.log('pagos acutalizados')
  };

  const resetPaymentDetails = () => {
    setPaymentDetails({
      tarjetaSeleccionada: "",
      numeroTarjeta: "",
      mesExpiracion: "",
      anioExpiracion: "",
      codigoSeguridad: "",
      nombreTitular: "",
      tipoIdentificacion: "",
      numeroIdentificacion: "",
      cuotas: 1,
      discountCode: "-",
    });
  };

  return {
    paymentDetails,
    updatePaymentDetails,
    resetPaymentDetails,
  };
}

export default usePaymentDetails;
