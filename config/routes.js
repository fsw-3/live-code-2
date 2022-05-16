const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/api/v1/posts", controllers.api.v1.postController.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.postController.create);
apiRouter.put("/api/v1/posts/:id", controllers.api.v1.postController.update);
apiRouter.get("/api/v1/posts/:id", controllers.api.v1.postController.show);
apiRouter.delete(
  "/api/v1/posts/:id",
  controllers.api.v1.postController.destroy
);

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
apiRouter.get("/", (request, response) => {
  response.json("Index page");
});
// ===============================================

/**
 * @swagger
 * definitions:
 *   Register:
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   Create_Update_Data:
 *     required:
 *       - nama
 *       - jenis
 *       - foto
 *     properties:
 *       nama:
 *         type: string
 *       jenis:
 *         type: string
 *       foto:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Authenticate User
 *   - name: Data
 *     description: Data
 */

// AUTH ENDPOINT
/**
 * @swagger
 * /auth/register:
 *   post:
 *     description: Register user
 *     tags: [Auth]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User's email.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: password
 *         description: User's password.
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: register
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Register'
 */
// apiRouter.post('/auth/signup', userController.createNewUserApi);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     description: Login to app
 *     tags: [Auth]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User's email.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: password
 *         description: User's password.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Login'
 */
// apiRouter.post("/auth/login", userController.signUserApi);

//============================================================

// DATA ENDPOINT
/**
 * @swagger
 * /find-all:
 *   get:
 *     description: Get all data
 *     tags: [Data]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: data
 */
// router.get('/find-all', authMiddleware.authorizationToken, dataController.findAllDataApi);

/**
 * @swagger
 * /findbyid/:id:
 *   get:
 *     description: Get data by id
 *     tags: [Data]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *       - type: string
 *     responses:
 *       200:
 *         description: data by id
 */
// apiRouter.get('/findbyid/:id', authMiddleware.authorizationToken, dataController.findDataByIdApi);

/**
 * @swagger
 * /create:
 *   post:
 *     description: Create new data
 *     tags: [Data]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nama
 *         description: Data's name.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: jenis
 *         description: Data's type.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: foto
 *         description: Data's photo.
 *         required: true
 *         in: formData
 *         type: string/file
 *     responses:
 *       201:
 *         description: create data
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Create_Update_Data'
 */
// apiRouter.post('/create', authMiddleware.authorizationToken, dataController.createNewDataApi);

/**
 * @swagger
 * /update/:id:
 *   put:
 *     description: Update data by id
 *     tags: [Data]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Data's id.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: nama
 *         description: Data's name.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: jenis
 *         description: Data's type.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: foto
 *         description: Car's photo.
 *         required: true
 *         in: formData
 *         type: string/file
 *     responses:
 *       200:
 *         description: update data
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Create_Update_Data'
 */
// apiRouter.put('/update/:id', authMiddleware.authorizationToken, dataController.updateDataApi);

/**
 * @swagger
 * /delete/:id:
 *   delete:
 *     description: Delete data by id
 *     tags: [Data]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *       - type: string
 *     responses:
 *       200:
 *         description: data by id
 */
// apiRouter.delete('/delete/:id', authMiddleware.authorizationToken, dataController.deleteData);

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
