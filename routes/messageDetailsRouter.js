import { Router } from "express";
import { messages } from "../messages.js";

const messageDetailsRouter = Router();

messageDetailsRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const message = messages[id];

    res.render("messageDetails", { message: message });
});

export { messageDetailsRouter };
