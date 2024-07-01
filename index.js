import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/statsRoute.js";
import cors from 'cors';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3007;
const mongoUrl = process.env.MONGO_URL;

app.use(cors());

mongoose.connect(mongoUrl)
    .then(() => {
        console.log('Mongo db connected successfully!')
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch((error) => console.log(`Error connecting to mongo db ${error}`))

app.use("/api",route)
