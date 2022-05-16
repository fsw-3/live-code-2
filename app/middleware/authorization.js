const jwt = require('jsonwebtoken');
const postRepository = require('../repositories/postRepository');

module.exports  = {
    async checkToken(req, res, next) {
        try {
          const bearerToken = req.headers.authorization;
          const token = bearerToken.split('Bearer ')[1];
          const payload = jwt.verify(token, process.env.JWt_SECRET);

          req.user = await postRepository.findByEmail(payload.email);
          next();
        } catch (error) {
            res.status(400).json({
                status: "FAIL",
                message: error.message,
              });
        }
      },
      async superadminOnly(req, res, next) {
        try {
          const bearerToken = req.headers.authorization;
          const token = bearerToken.split('Bearer ')[1];
          const payload = jwt.verify(token, process.env.JWT_SECRET);
          
        //   req.user = await postRepository.findByEmail(payload.role);
          console.log(payload.role);
          if (payload.role === 'superadmin') {
            next();
          };
        } catch (error) {
            res.status(400).json({
                status: "FAIL",
                message: error.message,
              });
        }
      },
      async adminOnly(req, res, next) {
        try {
          const bearerToken = req.headers.authorization;
          const token = bearerToken.split('Bearer ')[1];
          const payload = jwt.verify(token, process.env.JWT_SECRET);

        //   req.user = await postRepository.findByEmail(payload.role);
          console.log(payload.role);
          if (payload.role === 'admin') {
            next();
          };
        } catch (error) {
            res.status(400).json({
                status: "FAIL",
                message: error.message,
              });
        }
      }
}