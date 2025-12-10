const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        image: {
            type: String
        },
    }
);

module.exports = mongoose.model("Car", carSchema, "Car");