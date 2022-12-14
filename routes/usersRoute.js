const route = require("express").Router();
const userServices = require("../modules/userModule");
const isAuthenticated = require("../middlewares/verifyJWT");

// get all users for suggestion
route.get("/profile", isAuthenticated, userServices.getProfile);

//update user
route.put("/update", isAuthenticated, userServices.updateUser);

module.exports = route;