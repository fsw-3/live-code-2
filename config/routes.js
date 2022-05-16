const express = require("express");
const controllers = require("../app/controllers");
const authorization = require("../app/middleware/authorization");
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
// const swaggerDocument = YAML.load ('./binarcarrent-documentation.yaml');

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.post("/api/v1/register", controllers.api.v1.postController.register);
apiRouter.post("/api/v1/login", controllers.api.v1.postController.login);
apiRouter.get("/api/v1/whoami", authorization.checkToken, controllers.api.v1.postController.whoami);
apiRouter.get("/api/v1/", controllers.api.v1.postController.getAll);
apiRouter.post("/api/v1/add-car", authorization.superadminOnly, controllers.api.v1.postController.create);
apiRouter.get("/api/v1/delete-car/:id", authorization.superadminOnly, controllers.api.v1.postController.delete);
apiRouter.post("/api/v1/update-car/:id", authorization.superadminOnly, controllers.api.v1.postController.update);
//Documentation
// apiRouter.use("/api/v1/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument));


/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
