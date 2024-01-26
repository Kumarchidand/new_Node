// first mongoose export kar le
const mongoose = require("mongoose");
// define the mongodb connection URL
const mongoURL = "mongodb://127.0.0.1:27017/cscorner";
mongoose.connect(mongoURL, {
  // to established connection with mongodb url

  useNewUrlParser: true,
  useUnifiedTopology: true,
  // if u not consider two cases their might be error
});

const db = mongoose.connection; // mongoose khud maintain kar ta he connection established kar ne ke liye or db sab kuch sun raha he,eventlistner ke bare me

// define eventlistenrs for database connection
db.on("connected", () => {
  console.log("connected to mongodb server");
});

db.on("error", (err) => {
  console.log("mongoDb connection error", err);
});
db.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

module.exports = db; // exported the database connection
// yaha pe jo db he mongodb server ke sath connection hua he represent kar ra he
