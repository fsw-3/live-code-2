/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
 const livecodeService = require("../../../services/livecodeService");

 module.exports = {
  //  list(req, res) {
  //    livecodeService
  //      .list()
  //      .then(({ data, count }) => {
  //        res.status(200).json({
  //          status: "OK",
  //          data: { posts: data },
  //          meta: { total: count },
  //        });
  //      })
  //      .catch((err) => {
  //        res.status(400).json({
  //          status: "FAIL",
  //          message: err.message,
  //        });
  //      });
  //  },
 
  //  create(req, res) {
  //    livecodeService
  //      .create(req.body)
  //      .then((post) => {
  //        res.status(201).json({
  //          status: "OK",
  //          data: post,
  //        });
  //      })
  //      .catch((err) => {
  //        res.status(422).json({
  //          status: "FAIL",
  //          message: err.message,
  //        });
  //      });
  //  },
 
  //  update(req, res) {
  //     livecodeService
  //      .update(req.params.id, req.body)
  //      .then(() => {
  //        res.status(200).json({
  //          status: "OK",
  //        });
  //      })
  //      .catch((err) => {
  //        res.status(422).json({
  //          status: "FAIL",
  //          message: err.message,
  //        });
  //      });
  //  },
 
  //  show(req, res) {
  //    livecodeService
  //      .get(req.params.id)
  //      .then((post) => {
  //        res.status(200).json({
  //          status: "OK",
  //          data: post,
  //        });
  //      })
  //      .catch((err) => {
  //        res.status(422).json({
  //          status: "FAIL",
  //          message: err.message,
  //        });
  //      });
  //  },
 
  //  destroy(req, res) {
  //    livecodeService
  //      .delete(req.params.id)
  //      .then(() => {
  //        res.status(204).end();
  //      })
  //      .catch((err) => {
  //        res.status(422).json({
  //          status: "FAIL",
  //          message: err.message,
  //        });
  //      });
  //  },

   findall(req, res) {
    livecodeService
      console.log("post controller nih bang")
      .findall()
      .then(({ data}) => {
        res.status(200).json({
          status: "OK",
          data: { posts: data }
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
 