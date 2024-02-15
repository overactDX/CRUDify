const express = require("express");
const router = express.Router();
// const { register, login } = require("../Controller/Auth.js");
const { register, login } = require("../Controller/Auth");

// http://localhost:5000/api/register/

// middleware
const { auth } = require("../Middleware/Auth");

router.post("/register", register);

router.post("/login", login);

module.exports = router;
