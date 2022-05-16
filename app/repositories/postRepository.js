// const { Post } = require("../models");
const { User } = require("../models");
const bcrypt=require("bcrypt");

module.exports = {
  // create(createArgs) {
  //   return Post.create(createArgs);
  // },

  // update(id, updateArgs) {
  //   return Post.update(updateArgs, {
  //     where: {
  //       id,
  //     },
  //   });
  // },

  // delete(id) {
  //   return Post.destroy(id);
  // },

  // find(id) {
  //   return Post.findByPk(id);
  // },
  register(requestBody){
    // console.log(requestBody,'masuk repository');
    const hasPassword=bcrypt.hashSync(requestBody.password,10);
    requestBody.password=hasPassword;
    return User.create(requestBody);
  },

  // findAll() {
  //   return Post.findAll();
  // },

};
