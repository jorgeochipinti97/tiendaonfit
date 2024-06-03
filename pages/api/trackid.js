// pages/api/obtenerSiguienteCodigo.js
import Seguimiento from '@/Models/Seguimiento';
import { connectDB } from "@/lib/db";


export default async function handler(req, res) {
    await connectDB();

  if (req.method === 'POST') {
    const seguimiento = await Seguimiento.findOne({});

    if (!seguimiento) {
      // Si no existe un registro, lo crea con el valor inicial
      const nuevoSeguimiento = new Seguimiento({ ultimoCodigo: 100000 });
      await nuevoSeguimiento.save();
      res.status(200).json({ codGestion: 100000 });
    } else { 
      // Incrementa el último código y lo guarda
      seguimiento.ultimoCodigo += 1;
      await seguimiento.save();
      res.status(200).json({ codGestion: seguimiento.ultimoCodigo });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
