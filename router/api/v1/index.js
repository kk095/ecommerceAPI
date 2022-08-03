const express = require("express");
const router = express.Router();
// const controller = require(".../controller/api ");

router.use("/products", require("./products"));

module.exports = router;
