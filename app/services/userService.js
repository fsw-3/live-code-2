const userRepository = require("../repositories/userRepository");

const register = async (data) => {
  return await userRepository.register(data);
};

const findByEmail = async (email) => {
  return await userRepository.findByEmail(email);
};

module.exports = { register, findByEmail };
