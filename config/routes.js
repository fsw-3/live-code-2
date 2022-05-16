const express = require("express");
const controllers = require("../app/controllers");
const authorization = require("../app/middlewares/authorization")

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.post("/api/v1/register", controllers.api.v1.postController.register);
apiRouter.post("/api/v1/login", controllers.api.v1.postController.login);

apiRouter.post("/api/v1/create-book", authorization.checkToken, controllers.api.v1.postController.create);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
