const route = require("express").Router();
const authservices = require("../modules/authModule");

// Register
route.post("/register", authservices.register);

// Login
route.post("/login", authservices.login);

// Forgot password
route.put("/forgotpassword", authservices.forgotPassword);

// Reset password
route.put("/resetpassword", authservices.resetPassword);

module.exports = route;