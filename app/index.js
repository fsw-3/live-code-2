/**
 * @file Bootstrap express.js server
 * @author Fikri Rahmat Nurhidayat
 */

const express = require("express");
const morgan = require("morgan");
const router = require("../config/routes");

const app = express();
const PORT = 8000;

swaggerDocument = require("../swagger.json");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Data Management API",
      version: "1.0.0",
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js"
  apis: ["../config/routes.js"],
};

const specs = swaggerJsdoc(options);

// Swagger API Docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

/** Install request logger */
app.use(morgan("dev"));

/** Install JSON request parser */
app.use(express.json());

/** Install Router */
app.use(router);

app.listen(PORT, () => {
  console.info(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
