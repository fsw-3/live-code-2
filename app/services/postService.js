const postRepository = require("../repositories/postRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async register(data) {
    data.password = await this.encryptPassword(data.password);
    return postRepository.register(data);
  },

  async login(data) {
    data.email = data.email.toLowerCase();

    const user = await postRepository.findByEmail(data.email);

    if (!user) {
      throw new Error('Email tidak ditemukan');
    }

    const isPasswordCorrect = await this.checkPassword(
      user.password,
      data.password
    );

    if (!isPasswordCorrect) {
      throw new Error('Password salah');
    }

    const token = await this.createToken({
      email: data.email,
      password: data.password 
    });

    return {
      email: data.email,
      token
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

  async create(data) {
    return postRepository.create(data);
  }
};
