CREATE TABLE "reservations" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"email" text NOT NULL,
	"orario_arrivo" text,
	"partecipa_freestyle" boolean DEFAULT false,
	"note" text,
	"numero_persone" integer DEFAULT 1,
	"qty_aperitivo" integer DEFAULT 0,
	"qty_hot_dog" integer DEFAULT 0,
	"qty_piadina" integer DEFAULT 0,
	"qty_patatine" integer DEFAULT 0,
	"qty_bibita" integer DEFAULT 0,
	"qty_acqua" integer DEFAULT 0,
	"qty_menu_cena" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
