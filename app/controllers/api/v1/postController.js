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
   
   whoami(req, res){
     res.status(200).json(req.user.email);
   },


   // CRUD
   getAll(req, res) {
     postService
       .findAll()
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
   },
 
   delete(req, res) {
     postService
       .destroy({
         where: {
           id: req.params.id
         }
       })
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
 
   update(req, res) {
     postService
       .update(req.body, {
         where: {
           id: req.params.id
         }
       })
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
 