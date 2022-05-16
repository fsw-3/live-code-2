/**
 * @file Bootstrap express.js server
 * @author Fikri Rahmat Nurhidayat
 */

 const express = require("express");
 const morgan = require("morgan");
 const router = require("../config/routes");
 const cors = require('cors');
 
 require('dotenv').config();
 
 const app = express();
 
 /** Install request logger */
 app.use(morgan("dev"));
 
 // install cors
 app.use(cors());
 
 /** Install JSON request parser */
 app.use(express.json());
 
 /** Install Router */
 app.use(router);
 
 module.exports = app;
 