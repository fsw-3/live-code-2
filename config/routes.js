const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

const swaggerUi = require('swagger-ui-express');
const app = express();
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');
const redoc = require('redoc-express');


/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/findAll", controllers.api.v1.postController.list);
apiRouter.post("/create", controllers.api.v1.postController.create);
apiRouter.put("/update/:id", controllers.api.v1.postController.update);
apiRouter.get("/findbyid/:id", controllers.api.v1.postController.show);
apiRouter.get("/delete/:id", controllers.api.v1.postController.destroy);
apiRouter.get("/docs/swagger.json", (req, res) => {
  res.status(200).json(swaggerDocument)
});
apiRouter.get(
  '/docs', redoc({
    title: 'API Docs',
    specUrl: 'docs/swagger.json'
  })
);

// User
apiRouter.post("/register", controllers.api.v1.userController.register);
apiRouter.post("/login", controllers.api.v1.userController.login);
apiRouter.get("/whoami", controllers.api.v1.userController.authorized, controllers.api.v1.userController.whoAmI);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
