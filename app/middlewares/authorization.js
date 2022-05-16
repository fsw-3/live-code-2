const jwt = require('jsonwebtoken');
const postRepository = require('../repositories/postRepository');

module.exports  = {
    async checkToken(req, res, next) {
        try {
          const bearerToken = req.headers.authorization;
          const token = bearerToken.split('Bearer ')[1];
          const payload = jwt.verify(token, process.env.JWT_SECRET);

          req.user = await postRepository.findByEmail(payload.email);
          next();
        } catch (error) {
            res.status(400).json({
                status: "FAIL",
                message: error.message,
              });
        }
      }
}