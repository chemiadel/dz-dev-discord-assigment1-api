"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const auth_1 = __importDefault(require("../controllers/auth"));
exports.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
function LoginRoute(req, res) {
    console.log("req body", req.params);
    const isValid = (0, auth_1.default)(req.body);
    if (isValid)
        return res.json({
            token: exports.token,
        });
    return res.status(400).json({
        error: "Unauthorized",
    });
}
exports.default = LoginRoute;
