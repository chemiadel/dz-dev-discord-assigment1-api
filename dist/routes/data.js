"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_json_1 = __importDefault(require("../utils/users.json"));
const token_1 = __importDefault(require("../controllers/token"));
const staticResponses_1 = require("../utils/staticResponses");
function DataRoute(req, res) {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token)
        return res.status(400).json(staticResponses_1.notAuthorized);
    const isTokenValid = (0, token_1.default)(token);
    if (isTokenValid)
        return res.json(users_json_1.default);
    return res.status(400).json(staticResponses_1.notAuthorized);
}
exports.default = DataRoute;
