const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama wajib diisi"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email wajib diisi"],
      lowercase: true,
      trim: true,
    },
    subject: {
      type: String,
      required: [true, "Subjek wajib diisi"],
    },
    message: {
      type: String,
      required: [true, "Pesan wajib diisi"],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
