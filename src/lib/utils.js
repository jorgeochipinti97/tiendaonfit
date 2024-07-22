import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const formatCurrency = (value) => {
  // Crear formateador
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(value); //$2,500.00
};



export  const sku = [
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

export const obtenerSkuPorIdYTalle = (id, talle) => {
  const resultado = sku.find((s) => {
    const [skuId, skuTalle] = s.name.split(" ");
    return skuId === id && skuTalle === talle;
  });

  // Retorna el Sku si se encontró una coincidencia, de lo contrario retorna un string vacío
  return resultado ? resultado.Sku : "";
};