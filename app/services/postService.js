const postRepository = require("../repositories/postRepository");

module.exports = {
  create(requestBody) {
    return postRepository.create(requestBody);
  },

  update(id, requestBody) {
    return postRepository.update(id, requestBody);
  },

  delete(id) {
    return postRepository.delete(id);
  },

  async list() {
    try {
      const cats = await postRepository.findAll();
      const postCount = await postRepository.getTotalCat();

      return {
        data: cats,
        count: postCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return postRepository.find(id);
  },
};
