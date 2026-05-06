import { pgTable, serial, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";

export const reservations = pgTable("reservations", {
  id: serial("id").primaryKey(),

  // Dati dal formData
  nome: text("nome").notNull(),
  email: text("email").notNull(),
  orarioArrivo: text("orario_arrivo"),
  partecipaFreestyle: boolean("partecipa_freestyle").default(false),
  note: text("note"),

  // Dato dallo stato 'people'
  numeroPersone: integer("numero_persone").default(1),

  // Dati dall'oggetto 'quantities'
  qtyAperitivo: integer("qty_aperitivo").default(0),
  qtyHotDog: integer("qty_hot_dog").default(0),
  qtyPiadina: integer("qty_piadina").default(0),
  qtyPatatine: integer("qty_patatine").default(0),
  qtyBibita: integer("qty_bibita").default(0),
  qtyAcqua: integer("qty_acqua").default(0),
  // Ho aggiunto anche il menu cena perché presente nella UI
  qtyMenuCena: integer("qty_menu_cena").default(0),

  createdAt: timestamp("created_at").defaultNow(),
});