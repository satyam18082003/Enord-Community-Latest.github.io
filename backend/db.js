const mongoose = require("mongoose");

const url = "mongodb://Satyam:Satyam@ac-botywsm-shard-00-00.puhf6nh.mongodb.net:27017,ac-botywsm-shard-00-01.puhf6nh.mongodb.net:27017,ac-botywsm-shard-00-02.puhf6nh.mongodb.net:27017/QandA?ssl=true&replicaSet=atlas-thswq8-shard-0&authSource=admin&retryWrites=true&w=majority"

  // "mongodb://akky:KdaWNLd6wxADLvy@cluster0-shard-00-00.rfatk.mongodb.net:27017,cluster0-shard-00-01.rfatk.mongodb.net:27017,cluster0-shard-00-02.rfatk.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-i16i1b-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
