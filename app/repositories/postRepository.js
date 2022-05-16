const { Cat } = require("../models");

module.exports = {
  create(createArgs) {
    return Cat.create(createArgs);
  },

  update(id, updateArgs) {
    return Cat.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Cat.destroy({
      where: {id}
    });
  },

  find(id) {
    return Cat.findByPk(id);
  },

  findAll() {
    return Cat.findAll();
  },

  getTotalCat() {
    return Cat.count();
  },
};
