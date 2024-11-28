const express = require("express");
const {
  getAllUsers,
  getAllUsersTesting,
} = require("../controllers/controller");
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/testing").get(getAllUsersTesting);

module.exports = router;
