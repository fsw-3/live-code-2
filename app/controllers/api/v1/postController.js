/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
const postService = require("../../../services/postService");

module.exports = {
  // AUTHEN
  register(req, res) {
    postService
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
    postService
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

  // CRUD
  create(req, res) {
    postService
      .create(req.body)
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
  }
  
};
