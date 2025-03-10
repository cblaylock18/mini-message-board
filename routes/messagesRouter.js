import { Router } from "express";
import {
    messagesListGet,
    messageNewGet,
    messagesNewPost,
    messageDetailsGet,
} from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.get("/", messagesListGet);
messagesRouter.get("/new", messageNewGet);
messagesRouter.post("/new", messagesNewPost);
messagesRouter.get("/messageDetails/:id", messageDetailsGet);

export { messagesRouter };
