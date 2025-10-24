"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControllers = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const user_service_1 = require("./user.service");
const catchAsync_1 = require("../../app/utils/catchAsync");
const sendResponse_1 = require("../../app/utils/sendResponse");
// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const user = await createUserService(req.body)
//         res.status(httpStatus.CREATED).json({
//             message: "User created successfully",
//             user
//         })
//     } catch (error) {
//         console.log(error);
//         next(error)
//     }
// }
const createUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const user = await (0, user_service_1.createUserService)(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.CREATED,
        message: "User created successfully",
        data: user,
        success: true
    });
});
const getAllUsers = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const users = await (0, user_service_1.userServices)();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.default.CREATED,
        message: "User created successfully",
        data: users.data,
        success: true,
        meta: users.meta
    });
    return users;
});
exports.UserControllers = {
    createUser,
    getAllUsers
};
//# sourceMappingURL=user.controller.js.map