"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
let server;
const serverStart = async () => {
    try {
        await mongoose_1.default.connect(env_1.envVars.DB_URL);
        console.log("Connected to DB!!");
        app_1.default.listen(5000, () => {
            console.log("Server is listening to port 5000");
        });
    }
    catch (error) {
        console.log(error);
    }
};
serverStart();
//# sourceMappingURL=server.js.map