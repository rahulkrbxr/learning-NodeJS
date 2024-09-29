const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

async function connectMongoDb(url) {
  // Mongo db connection
  return mongoose.connect(url);
}

module.exports = {
  connectMongoDb,
};
