/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const postController = require("./postController");
const postController = require("./authController");
const postController = require("./shoesController");

module.exports = {
  postController,
  authController,
  shoesController,

};
