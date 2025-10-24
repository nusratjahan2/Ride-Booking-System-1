"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_route_1 = require("../../modules/user/user.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [{
        path: "/user",
        route: user_route_1.UserRoutes
    }
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.route);
});
// router.use("/user", UserRoutes)
//# sourceMappingURL=index.js.map