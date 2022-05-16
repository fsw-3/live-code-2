const userService = require("../../../services/userService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = "secret";

const authorize = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split(" ")[1];
    const tokenPayload = jwt.verify(token, secret);
    next();
  } catch (error) {
    if (error) {
      res.status(401).send({
        message: "Unauthorized",
      });
    }
  }
};

const registrer = async (req, res) => {
  try {
    const email = req.body.email;
    const exist = await userService.findByEmail(email);
    if (exist) {
      return res.status(400).send({
        message: "Email has been used",
      });
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const data = { email, password };
    const user = await userService.register(data);
    res.status(201).send({
      message: "User created",
      user,
    });
  } catch (error) {
    if (error) {
      return res.status(400).send(error.message);
    }
  }
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await userService.findByEmail(email);
  if (!user) {
    return res.status(404).send({
      message: "Email not found",
    });
  }
  const status = await bcrypt.compare(password, user.password);
  if (!status) {
    return res.status(404).send({
      message: "Wrong password",
    });
  }
  const token = jwt.sign({ user }, secret);
  res.status(200).send({
    message: "Login succes",
    token,
    user,
  });
};

module.exports = { registrer, login, authorize };
