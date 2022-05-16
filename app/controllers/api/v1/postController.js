/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
const postService = require("../../../services/postService");

module.exports = {
  register(req, res) {
    postService
      .register()
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
  }

};
