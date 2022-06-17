"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./routes/login"));
const data_1 = __importDefault(require("./routes/data"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.post("/login", login_1.default);
app.use("/data", data_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
