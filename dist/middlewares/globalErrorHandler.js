"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const env_1 = require("../config/env");
const appError_1 = __importDefault(require("../app/errorHelpers/appError"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = `Something went wrong: ${err.message}`;
    if (err instanceof appError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err instanceof Error) {
        statusCode = 500;
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        stack: env_1.envVars.NODE_ENV === 'development' ? err.stack : null
    });
};
exports.globalErrorHandler = globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map