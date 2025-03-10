import pool from "./pool.js";

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
        id,
    ]);
    return rows[0];
}

async function addMessage(message, author) {
    await pool.query(
        `INSERT INTO messages (text, "user", added)
VALUES
        ($1, $2, CURRENT_TIMESTAMP)`,
        [message, author]
    );
}

export { getAllMessages, getMessage, addMessage };
