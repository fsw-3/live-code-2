const { User, Car } = require("../models");

module.exports = {
  register(data) {
    return User.create(data);
  },

  findByEmail(email) {
    return User.findOne({
      where: { email }
    });
  },

  getAll(data) {
    return Car.findAll(data);
  },

  create(data) {
    return Car.create(data);
  },

  delete(data) {
    return Car.destroy(data);
  },

  update(data) {
    return Car.update(data);
  }
};
