const express = require("express");
const { getUsers, saveUser, updateUser, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", saveUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;