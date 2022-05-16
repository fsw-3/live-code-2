const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  register(data) {
    const hashPassword = bcrypt.hashSync(data.password, 10);
    return User.create(createArgs);
  },

};
