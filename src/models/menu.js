const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama menu wajib diisi"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Deskripsi menu wajib diisi"],
    },
    price: {
      type: Number,
      required: [true, "Harga menu wajib diisi"],
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["espresso", "manual-brew", "signature", "pastry", "non-coffee"],
    },
    image: {
      type: String,
      default: "",
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isBestSeller: {
      type: Boolean,
      default: false,
    },
    tags: [String],
  },
  { timestamps: true }
);

// Auto-generate slug sebelum save
menuSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

module.exports = mongoose.model("Menu", menuSchema);
