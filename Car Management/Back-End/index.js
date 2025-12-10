const express = require('express');
require("dotenv").config()

const db = require('./config/db.config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", require("./routes/car.route"));

app.listen(process.env.PORT, (e) => {
    if (e) {
        console.log("your server is not is started", e);
        return false;
    }
    console.log("Server has been started");
}
);