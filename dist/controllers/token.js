"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("../routes/login");
function tokenValidiation(reqToken) {
    if (login_1.token === reqToken)
        return true;
    return false;
}
exports.default = tokenValidiation;
