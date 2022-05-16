const { User, Book } = require("../models");

module.exports = {
  register(data) {
    return User.create(data);
  },

  findByEmail(email) {
    return User.findOne({
      where: { email }
    });
  },

  create(data) {
    return Book.create(data);
  }
};
