const Car = require("../models/car.model");

class CarService {
  async addCar(body) {
    try {
      return await Car.create(body);
      
    } catch (err) {
      console.log(err);
    }
  } async fetchAllCars() {
    try {
      return await Car.find({});
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "somethig went Wrong...", err })
      return;
    }
  }

  async updateCar(id, body) {
    try {
      return await Car.findByIdAndUpdate(id, body, { new: true });
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "somethig went Wrong...", err })
      return;
    }
  }

  async deleteCar(body) {
    try {
      return await Car.findByIdAndDelete(body);
    } catch (err) {
      console.log(err);
      res.status(400).json({ msg: "somethig went Wrong...", err })
      return;
    }
  }
}

module.exports = new CarService();