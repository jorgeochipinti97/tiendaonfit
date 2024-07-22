import { useState, useEffect } from "react";
import axios from "axios";

const useDiscount = () => {
  const [discountCodes, setDiscountCodes] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDiscountCodes = async () => {
      try {
        const response = await axios.get("/api/codes");
        setDiscountCodes(response.data);
      } catch (error) {
        console.error("Error al obtener los códigos de descuento:", error);
      }
    };

    fetchDiscountCodes();
  }, []);



  const applyDiscountCode = (code, total) => {
    const discount = discountCodes.find((discountCode) =>
      discountCode.code.some((c) => c.name === code && !c.isUsed)
    );

    if (discount) {
      const discountDetails = discount.code.find((c) => c.name === code);
      const discountAmount = discountDetails.isPercentaje
        ? (total * discountDetails.valor) / 100
        : discountDetails.valor;
      setDiscountCode(code);
      setDiscountAmount(discountAmount);
      console.log(discountAmount)
      alert(discountAmount);
      setError(null);
    } else {
      setError("Código de descuento inválido o ya utilizado");
    }
  };

  return {
    discountCode,
    discountAmount,
    discountCodes,
    error,
    applyDiscountCode,
  };
};

export default useDiscount;
