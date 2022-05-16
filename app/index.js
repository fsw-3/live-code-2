/**
 * @file Bootstrap express.js server
 * @author Fikri Rahmat Nurhidayat
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");
require('dotenv').config();

const app = express();

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.urlencoded({ extended:true }));

// view engine
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

/** Install Router */
app.use(router);

module.exports = app;
