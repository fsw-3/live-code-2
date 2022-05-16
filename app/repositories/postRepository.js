const { Post } = require("../models");

const create = async (data) => {
  console.log(data);
  return await Post.create({
    title: data.title,
    body: data.body,
    author: data.author,
  });
};

const getAllData = async () => {
  return await Post.findAll();
};

const getDataById = async (id) => {
  return await Post.findByPk(id);
};

const updateById = async (id, data) => {
  return await Post.update(
    {
      title: data.title,
      body: data.body,
      author: data.author,
    },
    {
      where: {
        id,
      },
    }
  );
};

const deleteById = async (id) => {
  return await Post.destroy({
    where: {
      id,
    },
  });
};

module.exports = { create, getAllData, getDataById, updateById, deleteById };
