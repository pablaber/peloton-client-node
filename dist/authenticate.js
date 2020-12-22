"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
async function authenticate(options) {
    const loginRes = await request_1.default.post('https://api.onepeloton.com/auth/login', {
        username_or_email: options.username,
        password: options.password,
    });
    clientVariables.cookie = loginRes.headers['set-cookie'];
    clientVariables.loggedIn = true;
}
//# sourceMappingURL=authenticate.js.map