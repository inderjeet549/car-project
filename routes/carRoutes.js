const express = require("express");
const { getCars, addCar } = require("../controllers/carController");

const router = express.Router();

router.get("/", getCars);
router.post("/", addCar);

module.exports = router;
