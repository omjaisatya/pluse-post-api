const mongoose = require("mongoose");
const { connectionUrl } = require("../config/kyes");

const connectMongodb = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log("Database connect successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectMongodb;
