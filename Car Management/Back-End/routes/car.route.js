const express = require("express");
const { storage } = require('../config/cloudinary.config'); 
const multer = require('multer');

const { addcar, getAllCars, updateCars, deletecars } = require("../controller/car.controller");

const route = express.Router();
const upload = multer({ storage });

route.post("/addcar", upload.single("image"), addcar);
route.get("/fetchallcars", getAllCars);
route.patch("/updatecar/:id", upload.single("image"), updateCars);
route.delete("/deletecar/:id", deletecars);

module.exports = route;
