import { getAllMessages, getMessage, addMessage } from "../db/queries.js";

async function messagesListGet(req, res) {
    const messages = await getAllMessages();
    res.render("index", {
        title: "Mini Messageboard",
        messages: messages,
    });
}

async function messageDetailsGet(req, res) {
    const { id } = req.params;
    const message = await getMessage(id);
    res.render("messageDetails", { message: message });
}

async function messageNewGet(req, res) {
    res.render("form");
}

async function messagesNewPost(req, res) {
    await addMessage(req.body.newMessage, req.body.newAuthor);
    res.redirect("/");
}

export { messagesListGet, messageNewGet, messagesNewPost, messageDetailsGet };
