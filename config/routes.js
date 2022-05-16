const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../data/documentation.json");

/**
 * TODO: Implement your own API
 *       implementations
 */
// apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
// apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
// apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
// apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
// apiRouter.delete(
//   "/api/v1/posts/:id",
//   controllers.api.v1.postController.destroy
// );
apiRouter.post("/api/v1/livecode/register", controllers.api.v1.postController.register);
// apiRouter.login("/api/v1/livecode/login",controllers.api.v1.postController.login);
// apiRouter.post("/api/v1/livecode/create",controllers.api.v1.postController.create);
apiRouter.get("/api/v1/livecode/find-all", controllers.api.v1.postController.findall);
// apiRouter.get("/api/v1/livecode/findbyid/:id",controllers.api.v1.postController.findbyid);
// apiRouter.post("/api/v1/livecode/update/:id",controllers.api.v1.postController.update);
// apiRouter.get("/api/v1/livecode/delete/:id",controllers.api.v1.postController.delete);

apiRouter.use("/docs",swaggerUi.serve);
apiRouter.get("/docs",swaggerUi.setup(swaggerDocument));

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
