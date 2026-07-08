import { drizzle } from "drizzle-orm/neon-http";        
import { neon } from "@neondatabase/serverless";        //postgre sql database ekata connect wenna meka use krnwa.
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";        // meka use krnwa database eke schema tika connect wenna. As one shecma

const sql = neon(ENV.DATABASE_URL);
export const db = drizzle(sql, { schema });             // database eakth ekka communicate krl queries run krnna drizzle use krnwa.
