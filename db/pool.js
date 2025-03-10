import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("❌ DATABASE_URL is missing! Check your .env file.");
}

const pool = new Pool({
    connectionString,
    ssl:
        process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
});

console.log(
    `✅ Connected to ${
        process.env.NODE_ENV === "production"
            ? "Internal Railway DB"
            : "Public Railway DB"
    }`
);

export default pool;
