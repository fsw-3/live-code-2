const userService = require("../../../services/userService");
const secretKey = "secret";
const jwt = require("jsonwebtoken");

module.exports = {
  registerForm(req, res) {
    res.render('register');
  },

  loginForm(req, res) {
    res.render('login');
  },

  register(req, res) {
    userService
      .register(req.body)
      .then((data) => {
        res.status(201).json({
          status: "CREATED",
          data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  login(req, res) {
    userService
      .login(req.body)
      .then((data) => {
        res.status(200).json({
          status: "OK",
          data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  authorized(req, res, next) {
    userService
      .authorized(req.headers.authorization)
      .then((data) => {
        res.status(200).json({
          status: "OK",
          data,
        });
      })
      .catch((err) => {
        res.status(401).send({
          message: "Unauthorized",
        });
        console.log(err.message);
      });
  },

  async whoAmI(req, res) {
    userService
      .whoAmI(req.headers.authorization)
      .then((data) => {
        res.status(200).json({
          status: "OK",
          data,
        });
      })
      .catch((err) => {
        res.status(401).send({
          message: "Unauthorized",
        });
        console.log(err.message);
      });
    // res.status(200).json(req.user);
  },
}