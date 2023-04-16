import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/hello", async (req, res) => {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: "Hello World",
            },
        ],
    });

    return res.json(completion.data.choices[0].message);
});

app.post("/sent-message", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        res.status(400).json({ message: "Missing message" });
        return;
    }

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: message,
            },
        ],
    });
    return res.json(completion.data.choices[0].message);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
