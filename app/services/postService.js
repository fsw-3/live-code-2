const postRepository = require("../repositories/postRepository");

module.exports = {
  // create(requestBody) {
  //   return postRepository.create(requestBody);
  // },

  // update(id, requestBody) {
  //   return postRepository.update(id, requestBody);
  // },

  // delete(id) {
  //   return postRepository.delete(id);
  // },

  // async list() {
  //   try {
  //     const posts = await postRepository.findAll();
  //     const postCount = await postRepository.getTotalPost();

  //     return {
  //       data: posts,
  //       count: postCount,
  //     };
  //   } catch (err) {
  //     throw err;
  //   }
  // },

  // get(id) {
  //   return postRepository.find(id);
  // },

  async findall() {
    try {
      const posts = await postRepository.findAll();
      // const postCount = await postRepository.getTotalPost();

      return {
        data: posts
      };
    } catch (err) {
      throw err;
    }
  },

  register(requestBody) {
    // console.log(requestBody,'masuk service gan')
    return postRepository.register(requestBody);
  },


};
