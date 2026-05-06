import { drizzle } from "drizzle-orm/neon-http";
import { getDatabase, ServerlessDatabaseConnection } from "@netlify/database";

const conn = getDatabase() as ServerlessDatabaseConnection;
export const db = drizzle(conn.httpClient);