const { response } = require("express");

const hiUser = (req, res = response) => {
  res.status(200).json({
    msg: "Hola usuario",
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;
  console.log(email);

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
};

module.exports = {
  loginUser,
  hiUser,
};
