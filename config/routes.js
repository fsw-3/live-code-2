const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.post("/register", controllers.api.v1.postController.register);
apiRouter.post("/login", controllers.api.v1.postController.login);
// apiRouter.post("/create", controllers.api.v1.postController.create);
// apiRouter.post("/find-all", controllers.api.v1.postController.findAll);
// apiRouter.post("/findbyid/:id", controllers.api.v1.postController.findById);
// apiRouter.post("/update/:id", controllers.api.v1.postController.update);
// apiRouter.post("/delete/:id", controllers.api.v1.postController.delete);
// apiRouter.post("/docs", controllers.api.v1.postController.docs);


apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
apiRouter.delete(
  "/api/v1/posts/:id",
  controllers.api.v1.postController.destroy
);

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
