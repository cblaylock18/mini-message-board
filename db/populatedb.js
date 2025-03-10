import dotenv from "dotenv";
dotenv.config();
import pkg from "pg";
const { Client } = pkg;

const connectionString =
    process.env.NODE_ENV === "production"
        ? process.env.DATABASE_URL_INTERNAL
        : process.env.DATABASE_URL_PUBLIC;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR (100),
"user" VARCHAR (100), 
added TIMESTAMP
);

INSERT INTO messages (text, "user", added)
VALUES
        ('Hello world! This is my first message!', 'Alice', CURRENT_TIMESTAMP),
    ('Exploring the new tech trends!', 'Bob', CURRENT_TIMESTAMP),
    ('Anyone up for a game of chess?', 'Charlie', CURRENT_TIMESTAMP),
    ('Coding late into the night is my jam!', 'Dana', CURRENT_TIMESTAMP),
    ('Good vibes only!', 'Eve', CURRENT_TIMESTAMP),
    ('Just finished a great book!', 'Frank', CURRENT_TIMESTAMP),
    ('Coffee is life.', 'Grace', CURRENT_TIMESTAMP);
    `;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: connectionString,
        ssl:
            process.env.NODE_ENV === "production"
                ? { rejectUnauthorized: false }
                : false,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
