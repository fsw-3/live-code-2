const express = require("express");
const controllers = require("../app/controllers");
const YAML = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = YAML.load("./openapi.yaml");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.post("/register", controllers.api.v1.userController.registrer);
apiRouter.post("/login", controllers.api.v1.userController.login);
apiRouter.post("/create", controllers.api.v1.userController.authorize, controllers.api.v1.postController.create);
apiRouter.get("/find-all", controllers.api.v1.postController.list);
apiRouter.get("/findbyid/:id", controllers.api.v1.postController.dataById);
apiRouter.put("/update/:id", controllers.api.v1.userController.authorize, controllers.api.v1.postController.updateData);
apiRouter.delete("/delete/:id", controllers.api.v1.userController.authorize, controllers.api.v1.postController.deleteData);
apiRouter.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error("The Industrial Revolution and its consequences have been a disaster for the human race.");
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
