"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dummyData = {
    email: "johndoe66@gmail.com",
    password: "somePassword",
};
function userValidition(userData) {
    if (dummyData.email === userData.email &&
        dummyData.password === userData.password)
        return true;
    return false;
}
exports.default = userValidition;
