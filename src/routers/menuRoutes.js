const express = require("express");
const router = express.Router();
const {
  getAllMenu,
  getMenuBySlug,
  getBestSellers,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menuController");

router.get("/", getAllMenu);
router.get("/best-sellers", getBestSellers);
router.get("/:slug", getMenuBySlug);
router.post("/", createMenu);
router.put("/:id", updateMenu);
router.delete("/:id", deleteMenu);

module.exports = router;
