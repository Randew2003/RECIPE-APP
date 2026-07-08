import { ENV } from "./src/config/env.js";      // import enviroment variale for .env file

export default {
  schema: "./src/db/schema.js",     // Tell drizzle where to find the schema file for the database.
  out: "./src/db/migrations",       // Specify the output directory for the generated migration files.
  dialect: "postgresql",            // Specify the database dialect (PostgreSQL in this case).
  dbCredentials: { url: ENV.DATABASE_URL },     // Provide the database connection URL from the environment variables.
};

// meka configuratin file eka krnne neon dashboard ekt Ape data tika pass krnna.