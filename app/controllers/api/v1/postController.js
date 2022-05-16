/**
 * @file contains request handler of post resource
 * @author Fikri Rahmat Nurhidayat
 */
const postService = require("../../../services/postService");

const create = async (req, res) => {
  const data = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };
  try {
    await postService.create(data);
  } catch (error) {
    if (error) {
      return res.status(400).send(error.message);
    }
  }
  res.status(201).send({
    message: "Post created",
    data,
  });
};

const list = async (req, res) => {
  try {
    const data = await postService.getAllData();
    res.status(200).send(data);
  } catch (error) {
    if (error) {
      return res.status(400).send(error.message);
    }
  }
};

const dataById = async (req, res) => {
  try {
    const exist = await postService.getDataById(req.params.id);
    if (!exist) {
      return res.status(404).send({
        message: `Post with id ${req.params.id} is not found`,
      });
    }
    const data = await postService.getDataById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    if (error) {
      return res.status(400).send(error.message);
    }
  }
};

const updateData = async (req, res) => {
  try {
    const exist = await postService.getDataById(req.params.id);
    if (!exist) {
      return res.status(404).send({
        message: `Post with id ${req.params.id} is not found`,
      });
    }
    const data = {
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    };
    await postService.updateById(req.params.id, data);
    res.status(200).send({
      message: "Post updated",
      data,
    });
  } catch (error) {
    if (error) {
      return res.status(400).send(error.message);
    }
  }
};

const deleteData = async (req, res) => {
  try {
    const exist = await postService.getDataById(req.params.id);
    if (!exist) {
      return res.status(404).send({
        message: `Post with id ${req.params.id} is not found`,
      });
    }
    await postService.deleteById(req.params.id);
    res.status(200).send({
      message: `Post with id ${req.params.id} has been deleted`,
    });
  } catch (error) {
    if (error) {
      return res.status(400).send(error.message);
    }
  }
};

module.exports = { create, list, dataById, updateData, deleteData };
