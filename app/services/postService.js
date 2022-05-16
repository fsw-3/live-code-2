const postRepository = require("../repositories/postRepository");

module.exports = {
  register(data) {
    return postRepository.register(data);
  },
};
