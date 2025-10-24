"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = exports.createUserService = void 0;
const user_model_1 = require("./user.model");
const createUserService = async (payload) => {
    const user = await user_model_1.User.create(payload);
    return user;
};
exports.createUserService = createUserService;
const userServices = async () => {
    const users = await user_model_1.User.find({});
    const totalUsers = await user_model_1.User.countDocuments();
    return {
        data: users,
        meta: {
            total: totalUsers
        }
    };
};
exports.userServices = userServices;
//# sourceMappingURL=user.service.js.map