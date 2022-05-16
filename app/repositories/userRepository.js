const { User } = require("../models");

const register = async (data) => {
  return await User.create({
    email: data.email,
    password: data.password,
  });
};

const findByEmail = async (email) => {
  return await User.findOne({
    where: {
      email,
    },
  });
};

module.exports = { register, findByEmail };
