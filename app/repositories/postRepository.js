const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
  register(data) {
    const hashPassword = bcrypt.hashSync(data.Password, 10);
    data.password = hashPassword;
    return User.create(data);
  },

  findByEmail(email) {
    return User.findOne({
      where: {
        email,
      }
    })
  }
};
