const Menu = require("../models/Menu");

// GET semua menu
exports.getAllMenu = async (req, res) => {
  try {
    const { category, available } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (available) filter.isAvailable = available === "true";

    const menus = await Menu.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: menus.length,
      data: menus,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET menu by slug
exports.getMenuBySlug = async (req, res) => {
  try {
    const menu = await Menu.findOne({ slug: req.params.slug });
    if (!menu) {
      return res
        .status(404)
        .json({ success: false, message: "Menu tidak ditemukan" });
    }
    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET best sellers
exports.getBestSellers = async (req, res) => {
  try {
    const menus = await Menu.find({ isBestSeller: true, isAvailable: true });
    res.status(200).json({ success: true, data: menus });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST buat menu baru
exports.createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json({ success: true, data: menu });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// PUT update menu
exports.updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!menu) {
      return res
        .status(404)
        .json({ success: false, message: "Menu tidak ditemukan" });
    }
    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE menu
exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res
        .status(404)
        .json({ success: false, message: "Menu tidak ditemukan" });
    }
    res.status(200).json({ success: true, message: "Menu berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
