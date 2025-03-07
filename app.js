import express from "express";
import { newMessageRouter } from "./routes/newMessageRouter.js";
import { messageDetailsRouter } from "./routes/messageDetailsRouter.js";
import path from "node:path";
import { fileURLToPath } from "url";
import { messages } from "./messages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use("/new", newMessageRouter);

app.use("/messagedetails", messageDetailsRouter);

app.use("/", (req, res) => {
    res.render("index", {
        title: "Mini Messageboard",
        messages: messages,
    });
});

app.listen(PORT, () => console.log(`Up and running on PORT: ${PORT}`));
