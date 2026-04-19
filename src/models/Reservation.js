const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama wajib diisi"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Nomor telepon wajib diisi"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    date: {
      type: Date,
      required: [true, "Tanggal reservasi wajib diisi"],
    },
    time: {
      type: String,
      required: [true, "Jam reservasi wajib diisi"],
    },
    guests: {
      type: Number,
      required: [true, "Jumlah tamu wajib diisi"],
      min: 1,
      max: 20,
    },
    note: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
