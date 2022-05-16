const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authorized } = require("../controllers/api/v1/userController");

module.exports = {
    async register(data) {
        data.password = await this.encryptPassword(data.password);
        return userRepository.register(data);
    },

    async login(data) {
        data.email = data.email.toLowerCase();

        const user = await userRepository.findByEmail(data.email);

        if (!user) {
            throw new Error('Email tidak ditemukan');
        }

        const isPasswordCorrect = await this.checkPassword(
            user.password,
            data.password
        );

        if (!isPasswordCorrect) {
            throw new Error('Password salah');
        }

        const token = await this.createToken({
            email: data.email,
            password: data.password
        });

        return {
            email: data.email,
            token
        };
    },

    async encryptPassword(password) {
        return bcrypt.hashSync(password, 10);
    },

    async checkPassword(encryptedPassword, bodyPassword) {
        return bcrypt.compare(
            bodyPassword,
            encryptedPassword,
        );
    },

    async createToken(data) {
        return jwt.sign(data, process.env.JWT_SECRET);
    },

    async whoAmI(data) {
        return userRepository.getMemberByToken(data);
    },

    async authorized(data) {
        try {
            data = req.headers.authorization;
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split(" ")[1];
            const tokenPayload = jwt.verify(token, process.env.JWT_SIGNATURE_KEY || "Secret");
            req.member = await userService.getMemberById(tokenPayload.Member.id);
            next();
          } catch (err) {
            throw err;
          }
    }, 
}