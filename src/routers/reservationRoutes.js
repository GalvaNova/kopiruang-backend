const express = require("express");
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  updateReservationStatus,
} = require("../controllers/reservationController");

router.get("/", getAllReservations);
router.post("/", createReservation);
router.patch("/:id/status", updateReservationStatus);

module.exports = router;
