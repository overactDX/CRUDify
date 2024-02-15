const express = require("express");
const router = express.Router();
const { hello } = require("../Controller/Hello");

router.get("/hello", hello);

module.exports = router;
