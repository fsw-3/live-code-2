const { User } = require("../models");

module.exports = {
  register(data) {
    return User.create(data);
  },

  findByEmail(email) {
    return User.findOne({
      where: { email }
    });
  },

  getUserByToken(token) {
    return User.findByPk({
      where: {
        token: token
      }
    });
  },

  getUserById(id) {
    return User.findByPk({
      where: {
        tokenPayload: id
      }
    });
  },
};