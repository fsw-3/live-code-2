const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    register(data) {
        const passwpordHash = bcrypt.hashSync(data.password, 10);
        data.password = passwpordHash;

        return User.create(data, {
            paranoid: false
        })
    },

    findByEmail(email) {
        return User.findOne({
            where: {
                email
            },
            paranoid: false
        })
    }
}