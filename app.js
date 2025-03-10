import { config } from "dotenv";
config();
import express from "express";
import { messagesRouter } from "./routes/messagesRouter.js";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Up and running on PORT: ${PORT}`));
