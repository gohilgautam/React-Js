const carService = require("../services/car.Services");

exports.addcar = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.path
    }

    const newcar = await carService.addCar(req.body);

    if (newcar) {
      return res.status(201).json({ status: true, msg: "New Car added Successfully", data: newcar });
    } else {
      return res.status(500).json({ status: false, msg: "New Car Addition Failed" });
    }

  } catch (err) {
    console.error("addcar error:", err);
    return res.status(500).json({ msg: "Something went wrong...", err});
  }
}

exports.getAllCars = async (req, res) => {
  try {
    const allcars = await carService.fetchAllCars();
    return res.status(200).json({ msg: "All Cars fetched successfully", data: allcars });
  } catch (err) {
    console.error("getAllCars error:", err);
    return res.status(500).json({ msg: "Something went wrong...", err });
  }
}

exports.updateCars = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }

    const updatedCar = await carService.updateCar(req.params.id, req.body);

    if (updatedCar) {
      return res.status(200).json({ msg: "Car updated successfully", data: updatedCar });
    } else {
      return res.status(404).json({ msg: "Car not found or update failed" });
    }
  } catch (err) {
    console.error("updateCars error:", err);
    return res.status(500).json({ msg: "Something went wrong...", err});
  }
}

exports.deletecars = async (req, res) => {
  try {
    const deletedCar = await carService.deleteCar(req.params.id);

    if (deletedCar) {
      return res.status(200).json({ msg: "Car deleted successfully", data: deletedCar });
    } else {
      return res.status(404).json({ msg: "Car not found or delete failed" });
    }
  } catch (err) {
    console.error("deletecars error:", err);
    return res.status(500).json({ msg: "Something went wrong...", err});
  }
}
