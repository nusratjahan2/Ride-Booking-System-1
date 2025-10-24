"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const validateUsers_1 = require("../../middlewares/validateUsers");
const router = (0, express_1.Router)();
router.post("/register", (0, validateUsers_1.validateRequest)(user_validation_1.createUserZodSchema), user_controller_1.UserControllers.createUser);
router.get("/all-users", user_controller_1.UserControllers.getAllUsers);
exports.UserRoutes = router;
//# sourceMappingURL=user.route.js.map