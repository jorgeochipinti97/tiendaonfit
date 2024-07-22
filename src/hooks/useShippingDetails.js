"use client";
import { useState } from "react";

function useShippingDetails() {
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    email: "",
    address: "",
    addressNumber: "",
    piso: "",
    city: "",
    localidad: "",
    provincia: "",
    mobile: "",
    postalCode: "",
    deliveryNote: "",
  });

  const updateShippingDetails = (newData) => {
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      ...newData,
    }));
    console.log('direccion acutalizada')

  };

  const resetShippingDetails = () => {
    setShippingDetails({
      firstName: "",
      lastName: "",
      idNumber: "",
      email: "",
      address: "",
      addressNumber: "",
      piso: "",
      city: "",
      localidad: "",
      provincia: "",
      mobile: "",
      postalCode: "",
      deliveryNote: "",
    });
  };

  return {
    shippingDetails,
    updateShippingDetails,
    resetShippingDetails,
  };
}

export default useShippingDetails;
