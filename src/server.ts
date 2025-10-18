import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./config/env";

let server: Server;

const serverStart = async () => {

    try {
        await mongoose.connect(envVars.DB_URL)
        console.log("Connected to DB!!");
        app.listen(5000, () => {
            console.log("Server is listening to port 5000");
        })
    } catch (error) {
        console.log(error);
    }

}

serverStart();
