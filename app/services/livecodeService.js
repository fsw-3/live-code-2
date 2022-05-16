const livecodeRepository = require("../repositories/livecodeRepository");

module.exports = {
  create(requestBody) {
    return livecodeRepository.create(requestBody);
  },

  update(id, requestBody) {
    return livecodeRepository.update(id, requestBody);
  },

  delete(id) {
    return livecodeRepository.delete(id);
  },

  async list() {
    try {
      const posts = await livecodeRepository.findAll();
      const postCount = await livecodeRepository.getTotalPost();

      return {
        data: posts,
        count: postCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return livecodeRepository.find(id);
  },
};
