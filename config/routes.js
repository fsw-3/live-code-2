const express = require("express");
const controllers = require("../app/controllers");
const authorization = require("../app/middlewares/authorization");
const apiRouter = express.Router();

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


//auth
apiRouter.post('/api/v1/register', controllers.api.v1.authController.register);
apiRourer.post('/api/v1/login', controllers.api.v1.authController.login);

//shoes
apiRouter.post('/api/v1/create', authorization.checkToken, controllers.api.v1.shoesController.create);
apiRouter.get('/api/v1/list' , controllers.api.v1.shoesController.list);
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
