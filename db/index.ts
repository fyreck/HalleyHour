import { drizzle } from "drizzle-orm/netlify-http";
import database from "@netlify/database";

export const db = drizzle(database);
