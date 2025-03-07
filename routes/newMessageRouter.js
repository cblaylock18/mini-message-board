import { Router } from "express";
import { messages } from "../messages.js";

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("form");
});

newMessageRouter.post("/", (req, res) => {
    messages.push({
        text: req.body.newMessage,
        user: req.body.newAuthor,
        added: new Date(),
    });

    res.redirect("/");
});

export { newMessageRouter };
