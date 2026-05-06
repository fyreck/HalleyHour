import { db } from "../../db";
import { reservations } from "../../db/schema";

export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    await db.insert(reservations).values({
      nome: data.name,
      email: data.email,
      numeroPersone: Number(data.people),
      orarioArrivo: data.arrivalTime,
      partecipaFreestyle: data.freestyle,
      note: data.notes,
      qtyAperitivo: data.quantities.aperitivo,
      qtyHotDog: data.quantities.hot_dog,
      qtyPiadina: data.quantities.piadina,
      qtyPatatine: data.quantities.patatine,
      qtyBibita: data.quantities.bibita,
      qtyAcqua: data.quantities.acqua,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successo" }),
    };
  } catch (error: any) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};