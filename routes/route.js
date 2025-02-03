const express = require("express");
const router = express.Router();
const controller = require("../controller/controller")
router.get("/", controller);

module.exports = router;