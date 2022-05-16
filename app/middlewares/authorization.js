const jwt = require("jsonwebtoken");
const authRepository = require('../repositories/authRepository');

module.exports = {
    async checkToken(req, res, next) {
        try {
            const bearerToken = req.headers.authorization
            const token = bearerToken.split('Bearer ')[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await authRepository.findByEmail(payload.email);
            next();
        } catch (error) {
            res.status(401).json({
                status: "Unauthorized",
                message: error.message,
              });
        }
    }


};