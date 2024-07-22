import { connectDB } from "@/lib/db";
import DiscountCodeOnfit from "@/Models/DiscountCodes";

export default async function handler(req, res) {
  await connectDB();
  switch (req.method) {
    case "GET":
      return handleGet(req, res);
    default:
      res.status(405).json({ error: "Método no permitido" });
  }
}

async function handleGet(req, res) {
  try {
    const discountCodes = await DiscountCodeOnfit.find();
    res.status(200).json(discountCodes);
  } catch (error) {
    console.error("Error al obtener los códigos de descuento:", error);
    res.status(500).json({ error: "Error al obtener los códigos de descuento" });
  }
}
