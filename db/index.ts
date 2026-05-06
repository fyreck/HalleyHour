import { drizzle } from "drizzle-orm/netlify-http";
import { NetlifyDatabase } from "@netlify/database";

const client = new NetlifyDatabase();
export const db = drizzle(client);