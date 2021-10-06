const express = require("express");

const usersRouter = express.Router();

usersRouter.get("", async (req, res) => {
  res.status(200).json({
    msg: "Heroku corriendo",
  });
});

usersRouter.get("/hi", async (req, res) => {
  res.status(200).json({
    msg: "Hola usuario",
  });
});

usersRouter.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email) {
    res.status(401).json({
      msg: "Email vacio",
    });
  } else {
    if (!password) {
      res.status(401).json({
        msg: "Password Vacia",
      });
    } else {
      res.status(200).json({
        msg: "login succesful",
        email,
        password,
      });
    }
  }
});

module.exports = usersRouter;
