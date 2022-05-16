const postRepository = require("../repositories/postRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getAll } = require("../repositories/postRepository");

module.exports = {
  async register(data) {
    data.password = await this.encryptPassword(data.password);
    return postRepository.register(data);
  },

  async login(data) {
    data.email = data.email.toLowerCase();

    const user = await postRepository.findByEmail(data.email);
    const role = user.role;

    if (!user) {
      throw new Error('Email tidak ditemukan');
    }

    const isPasswordCorrect = await this.checkPassword(
      user.password,
      data.password,
      user.role
    );

    if (!isPasswordCorrect) {
      throw new Error('Password salah');
    }

    const token = await this.createToken({
      email: user.email,
      password: user.password,
      role: user.role 
    });

    return {
      email: data.email,
      token,
      role
    };
  },

  async encryptPassword(password) {
    return bcrypt.hashSync(password, 10);
  },

  async checkPassword(encryptedPassword, bodyPassword) {
    return bcrypt.compare(
      bodyPassword,
      encryptedPassword,
    );
  },

  async createToken(data) {
    return jwt.sign(data, process.env.JWT_SECRET);
  },

  async whoami(data) {
    return postRepository.whoami(data);
  },

  async findAll(data) {
    return postRepository.getAll(data);
  },

  async create(data) {
    return postRepository.create(data);
  },

  async destroy(data) {
    return postRepository.delete(data);
  },

  async update(data) {
    return postRepository.update(data);
  }
};
