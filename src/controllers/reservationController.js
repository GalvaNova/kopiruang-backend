const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json({
      success: true,
      message: "Reservasi berhasil dibuat! Kami akan segera konfirmasi.",
      data: reservation,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ date: 1 });
    res
      .status(200)
      .json({ success: true, count: reservations.length, data: reservations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateReservationStatus = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!reservation) {
      return res
        .status(404)
        .json({ success: false, message: "Reservasi tidak ditemukan" });
    }
    res.status(200).json({ success: true, data: reservation });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
