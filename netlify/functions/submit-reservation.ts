import { db } from "../../db";
import { reservations } from "../../db/schema";

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, arrivalTime, freestyle, notes, people, quantities } = body;

    await db.insert(reservations).values({
      nome: name,
      email: email,
      orarioArrivo: arrivalTime,
      partecipaFreestyle: freestyle,
      note: notes,
      numeroPersone: Number(people) || 1,
      qtyAperitivo: quantities?.aperitivo || 0,
      qtyHotDog: quantities?.hot_dog || 0,
      qtyPiadina: quantities?.piadina || 0,
      qtyPatatine: quantities?.patatine || 0,
      qtyBibita: quantities?.bibita || 0,
      qtyAcqua: quantities?.acqua || 0,
      qtyMenuCena: quantities?.menu_cena || 0,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response('Internal Server Error', { status: 500 });
  }
};
