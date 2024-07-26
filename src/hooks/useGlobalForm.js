"use client";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import useFacebookPixel from "./usePixelFacebook";
import useStore from "@/lib/cart";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

import { useEffect, useState } from "react";
import useDiscount from "./useDiscount";

function useGlobalForm() {

  const trackEvent = useFacebookPixel();
  const [trackId, setTrackId] = useState();
  const { toast } = useToast();
  const {
    shippingDetails,
    paymentDetails,
    updateShippingDetails,
    updatePaymentDetails,
    resetFormData,
  } = useStore();

  const sku = [
    { name: "65e537dd6b8340a3e1abb82d M", Sku: "SFNTM" },
    { name: "65e537dd6b8340a3e1abb82d L", Sku: "SFNTL" },
    { name: "65e537dd6b8340a3e1abb82d XL", Sku: "SFNTXL" },
    { name: "65e5383c6b8340a3e1abb86a L", Sku: "SFGTL" },
    { name: "65e5383c6b8340a3e1abb86a M", Sku: "SFGTM" },
    { name: "65e5383c6b8340a3e1abb86a XL", Sku: "SFGTXL" },
    { name: "65cc0ed0cc62de1de4a5b7f6 L", Sku: "AMBITNEGL" },
    { name: "65cc0ed0cc62de1de4a5b7f6 M", Sku: "AMBITNEGM" },
    { name: "65cc0ed0cc62de1de4a5b7f6 S", Sku: "AMBITNEGS" },
    { name: "65cc0ed0cc62de1de4a5b7f6 XL", Sku: "AMBITNEGXL" },
    { name: "65cc1028cc62de1de4a5b816 L", Sku: "ANTICNEGL" },
    { name: "65cc1028cc62de1de4a5b816 M", Sku: "ANTICNEGM" },
    { name: "65cc1028cc62de1de4a5b816 S", Sku: "ANTICNEGS" },
    { name: "65cc13c5312e0e39f55b92e7 L", Sku: "ARNOLDNEGL" },
    { name: "65cc13c5312e0e39f55b92e7 M", Sku: "ARNOLDNEGM" },
    { name: "65cc13c5312e0e39f55b92e7 S", Sku: "ARNOLDNEGS" },
    { name: "65cc13c5312e0e39f55b92e7 XL", Sku: "ARNOLDNEGXL" },
    { name: "65cc150c312e0e39f55b92fa L", Sku: "BASQUETNEGL" },
    { name: "65cc150c312e0e39f55b92fa M", Sku: "BASQUETNEGM" },
    { name: "65cc150c312e0e39f55b92fa XL", Sku: "BASQUETNEGXL" },
    { name: "65cc15fa312e0e39f55b930f L", Sku: "DREAMNEGL" },
    { name: "65cc15fa312e0e39f55b930f M", Sku: "DREAMNEGM" },
    { name: "65cc15fa312e0e39f55b930f XL", Sku: "DREAMNEGXL" },

    { name: "65cc1737312e0e39f55b9327 M", Sku: "PLANECANGUM" },
    { name: "65cc1737312e0e39f55b9327 L", Sku: "PLANECANGUL" },
    { name: "65cc1737312e0e39f55b9327 XL", Sku: "PLANECANGUXL" },

    { name: "65cc1820312e0e39f55b9342 L", Sku: "ROCKYCANL" },
    { name: "65cc1820312e0e39f55b9342 M", Sku: "ROCKYCANM" },
    { name: "65cc1820312e0e39f55b9342 XL", Sku: "ROCKYCANXL" },
    { name: "65cc18da312e0e39f55b9360 L", Sku: "CABLANL" },
    { name: "65cc18da312e0e39f55b9360 M", Sku: "CABLANM" },
    { name: "65cc18da312e0e39f55b9360 XL", Sku: "CABLANXL" },
    { name: "65cc19f0312e0e39f55b9383 L", Sku: "JAPONBLANL" },
    { name: "65cc19f0312e0e39f55b9383 M", Sku: "JAPONBLANM" },
    { name: "65cc19f0312e0e39f55b9383 S", Sku: "JAPONBLANS" },
    { name: "65cc19f0312e0e39f55b9383 XL", Sku: "JAPONBLANXL" },
    { name: "65cc1a8a312e0e39f55b93aa L", Sku: "LUNANEGL" },
    { name: "65cc1a8a312e0e39f55b93aa M", Sku: "LUNANEGM" },
    { name: "65cc1a8a312e0e39f55b93aa S", Sku: "LUNANEGS" },
    { name: "65cc1a8a312e0e39f55b93aa XL", Sku: "LUNANEGXL" },
    { name: "65cc1b42312e0e39f55b93d5 L", Sku: "MARINEGL" },
    { name: "65cc1b42312e0e39f55b93d5 M", Sku: "MARINEGM" },
    { name: "65cc1b42312e0e39f55b93d5 S", Sku: "MARINEGS" },
    { name: "65cc1bff312e0e39f55b9402 L", Sku: "PIRABLANL" },
    { name: "65cc1bff312e0e39f55b9402 M", Sku: "PIRABLANM" },
    { name: "65cc1bff312e0e39f55b9402 S", Sku: "PIRABLANS" },
    { name: "65cc1bff312e0e39f55b9402 XL", Sku: "PIRABLANXL" },
    { name: "65cc4ad43d9e3e9a8c718732 L", Sku: "SHORTGRISL" },
    { name: "65cc4ad43d9e3e9a8c718732 M", Sku: "SHORTGRISM" },
    { name: "65cc4ad43d9e3e9a8c718732 XL", Sku: "SHORTGRISXL" },
    { name: "65cc4a6f3d9e3e9a8c7186fd M", Sku: "SHORTNEGM" },
    { name: "65cc4a6f3d9e3e9a8c7186fd XL", Sku: "SHORTNEGXL" },
  ];

  const products = useStore((state) => state.getProducts()); // Usar el selector para obtener los productos
  // const total = useStore((state) => state.getTotal());

  const obtenerSkuPorIdYTalle = (id, talle) => {
    const resultado = sku.find((s) => {
      const [skuId, skuTalle] = s.name.split(" ");
      return skuId === id && skuTalle === talle;
    });

    // Retorna el Sku si se encontró una coincidencia, de lo contrario retorna un string vacío
    return resultado ? resultado.Sku : "";
  };

  const productosEnvio = products.map((item) => ({
    largo: item.subcategoria.toLowerCase().includes("remera") ? 32 : 54,
    alto: 5,
    ancho: item.subcategoria.toLowerCase().includes("remera") ? 44 : 42,
    peso: item.subcategoria.toLowerCase().includes("remera") ? 0.3 : 0.5,
    valor: item.precio,
    valorContrareembolso: 0,
    cantidad: item.quantity,
    sku: obtenerSkuPorIdYTalle(item._id, item.size) || "",
    descripcionProducto: `${item.title} - ${item.size} `,
  }));

  const datosEnvio = {
    productos: productosEnvio,
    autentificacion: {
      shipper: 3575,
      password: "yFXGj8WIrB8dNLH",
    },
    destinatario: {
      tipoDocumento: "DNI",
      numeroDocumento: shippingDetails.idNumber,
      nombre: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
      email: [shippingDetails.email],
      telefono: shippingDetails.mobile,
      celular: shippingDetails.mobile,
    },
    autorizado: [
      {
        tipoDocumento: "DNI",
        numeroDocumento: shippingDetails.idNumber,
        nombre: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
        email: [shippingDetails.email],
        telefono: shippingDetails.mobile,
        celular: shippingDetails.mobile,
      },
    ],
    domicilio: {
      direccion: shippingDetails.address,
      altura: shippingDetails.addressNumber,
      piso: shippingDetails.apartment,
      departamento: shippingDetails.apartment,
      codigoPostal: shippingDetails.postalCode,
      localidad: shippingDetails.localidad,
      provincia: shippingDetails.provincia,
      latitud: 0,
      longitud: 0,
      telefono: [shippingDetails.mobile],
    },
    sameday: 0,
    datoNumerico: "",
    codigoSeguimiento: trackId,
    codigoAlternativo: 0,
    modeloSms: "",
    modeloEmail: null,
    servicio: "E",
    marcaDeAgua: "",
    remito: "",
    observaciones: [shippingDetails.deliveryNote],
  };

  useEffect(() => {
    fetchTrackId();
  }, []);

  async function fetchTrackId() {
    const codigoDeSeguimiento = await obtenerSiguienteCodigoDeSeguimiento();
    if (codigoDeSeguimiento) {
      setTrackId(codigoDeSeguimiento);
    }
  }

  const obtenerSiguienteCodigoDeSeguimiento = async () => {
    try {
      const response = await axios.post("/api/trackid");
      // console.log(response);
      return response.data.codGestion;
    } catch (error) {
      console.error(
        "Error al obtener el siguiente código de seguimiento:",
        error
      );
      toast({
        title: "Error",
        description: "No se pudo obtener el código de seguimiento.",
        variant: "destructive",
      });
      return null;
    }
  };

  const generarToken = async (data, total, discountCode) => {
    try {
      const apiKey = "16e8508ea61d4c4d8093f16d8ee9a3c2"; // Reemplaza con tu API Key
      const response = await axios.post(
        "https://ventasonline.payway.com.ar/api/v2/tokens",
        {
          card_number: data.numeroTarjeta,
          card_expiration_month: data.mesExpiracion,
          card_expiration_year: data.anioExpiracion,
          security_code: data.codigoSeguridad,
          card_holder_name: data.nombreTitular,
          card_holder_identification: {
            type: data.tipoIdentificacion,
            number: data.numeroIdentificacion,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            apikey: apiKey,
          },
        }
      );

      if (response.data) {
        await getPayment(response.data.id, data, total, discountCode);
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo generar el token.",
        variant: "destructive",
      });
    }
  };

  const getPayment = async (token, data, total, discountCode) => {
    const apikey = "ba0fb5b8bed24975af3ef167e1dcae71"; // Reemplaza con tu API Key
    const datos = {
      customer: {
        id: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
        email: shippingDetails.email,
      },
      user_id: "customer",
      site_transaction_id: uuidv4(),
      token: token,
      payment_method_id: data.tarjetaSeleccionada,
      bin: "450799",
      // amount: 2900,
      amount: Math.round(total * 100),
      currency: "ARS",
      site_id: "00270150",
      establishment_name: "Tienda Onfit",
      installments: data.cuotas,
      description: "pago Onfit",
      payment_type: "single",
      sub_payments: [],
    };

    try {
      const response = await axios.post(
        "https://ventasonline.payway.com.ar/api/v2/payments",
        datos,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: apikey,
          },
        }
      );

      if (response.data.status === "approved") {
        await createOrder(
          response.data.token,
          response.data.site_transaction_id,
          total,
          discountCode
        );

        toast({
          title: "Pago aprobado",
          description: "Tu pago ha sido aprobado.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo procesar el pago.",
        variant: "destructive",
      });
    }
  };

  const createOrder = async (token, transactionId, total, discountCode) => {
    if (!products || !total || !shippingDetails || !paymentDetails) {
      throw new Error("Faltan datos necesarios para crear la orden.");
    }
    try {
      const orderData = {
        orderItems: products.map((e) => {
          return {
            _id: e._id,
            title: e.titulo,
            price: e.precio,
            images: e.images[0],
            sku: obtenerSkuPorIdYTalle(e._id, e.size),
            quantity: e.quantity,
          };
        }),
        numberOfItems: products ? products.length : 0,
        total: total,
        transactionId: transactionId,
        token: token,
        titular: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
        email: shippingDetails.email,
        address: shippingDetails.address,
        numberOfAddress: shippingDetails.addressNumber,
        localidad: shippingDetails.localidad,
        piso: shippingDetails.piso,
        ciudad: shippingDetails.city,
        provincia: shippingDetails.provincia,
        phone: shippingDetails.mobile,
        dniTitular: `${shippingDetails.idNumber}`,
        postalCode: shippingDetails.postalCode,
        discountPrice: 0,
        cuotas: `${paymentDetails.cuotas}`,
        discountCode: discountCode ? discountCode : "-",
      };

      const createOrderResponse = await axios.post("/api/orders", orderData);

      if (createOrderResponse.data) {
        const cargaCliente = await axios.post("/api/cargaclients", datosEnvio);
        const response = await axios.put(
          `/api/orders?_id=${createOrderResponse.data._id}`,
          {
            codGestion: cargaCliente.data.codGestion,
          }
        );

        const stockUpdatePromises = products.map((item) =>
          axios.put("/api/product", {
            _id: item._id,
            nombre: item.size.toLowerCase(),
            stock: item.quantity,
          })
        );

        await Promise.all(stockUpdatePromises);
        trackEvent("Purchase", {
          content_ids: products.map((product) => product._id), // Agrega los IDs de los productos
          content_type: "product",
          value: total, // Aquí agrega el valor total de la compra
          currency: "ARS",
        });
        window.open(`/order?_id=${response.data._id}`, "_blank");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo crear la orden.",
        variant: "destructive",
      });
    } finally {
    }
  };

  const submitGlobalForm = async (data, total, discountCode) => {
    try {
      await updatePaymentDetails(data);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Ha ocurrido un error en el proceso.",
        variant: "destructive",
      });
    } finally {
      await generarToken(data, total, discountCode);

    }
  };

  return {
    shippingDetails,
    paymentDetails,
    updateShippingDetails,
    updatePaymentDetails,
    resetFormData,
    submitGlobalForm,

  };
}

export default useGlobalForm;
