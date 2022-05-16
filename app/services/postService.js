const postRepository = require("../repositories/postRepository");

module.exports = {
  register(data) {
    return postRepository.register(data);
  },

  login(data) {
    const user = await postRepository.findByemail(data.email);
  }
};
