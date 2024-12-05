const express = require("express");
const router = express.Router();

// File Imports
router.use("/user", require("./user.routes"));

module.exports = router;
