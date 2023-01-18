const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);
let connect = mongoose.connect(process.env.db_URL);

module.exports = connect;
