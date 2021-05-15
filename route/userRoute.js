const express = require("express");

const greetingRouter = express.Router();

const { greet } = require("../controller/userController")();

greetingRouter.route("/").get(greet);

module.exports = greetingRouter;
