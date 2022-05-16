const postRepository = require("../repositories/postRepository");

const create = async (data) => {
  return await postRepository.create(data);
};

const getAllData = async () => {
  return await postRepository.getAllData();
};

const getDataById = async (id) => {
  return await postRepository.getDataById(id);
};

const updateById = async (id, data) => {
  return await postRepository.updateById(id, data);
};

const deleteById = async (id) => {
  return await postRepository.deleteById(id);
};

module.exports = { create, getAllData, getDataById, updateById, deleteById };
