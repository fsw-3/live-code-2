/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
const postService = require("../../../services/postService");

module.exports = {
  register(req, res) {
    postService
      .register(req.body)
      .then(({data}) => {
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

  create(req, res) {
    postService
      .create(req.body)
      .then((post) => {
        res.status(201).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    postService
      .update(req.params.id, req.body)
      .then(() => {
        res.status(200).json({
          status: "OK",
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  show(req, res) {
    postService
      .get(req.params.id)
      .then((post) => {
        res.status(200).json({
          status: "OK",
          data: post,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  destroy(req, res) {
    postService
      .delete(req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },
};
