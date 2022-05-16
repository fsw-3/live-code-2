const authRepository = require('../repositories/authRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    register(data)
    {
        return authRepository.register(data);
    },

    async login(data)
    {
        data.email = data.email.toLowerCase();

        const user = await authRepository.findByEmail(data.email);

        if(!user){
            throw new Error("Email tidak di temukan !");
        }

        const isPasswordCorrect = await this.checkPassword(user.password, data.password);

        if(!isPasswordCorrect){
            throw new Error("Password salah !");
        }

        const Token = await this.createToken(
            {
                id: user.id,
                email: user.email,
                email: data.email,
                password: data.password,
            }
        );

        return {
            id: user.id,
            name: user.name,
            email: data.email,
            Token
        };



    },



      async checkPassword(encryptedPassword, bodyPassword)
    {
        return bcrypt.compare(
            bodyPassword,
            encryptedPassword
        );
    },

    async createToken(data)
    {
        return jwt.sign(data, process.env.JWT_SECRET);
    }

}