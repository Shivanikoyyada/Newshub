let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const rt = require("./route/route");


mongoose.connect("mongodb://127.0.0.1:27017/postdb").then(() => {
  console.log("ok");
});
let app = express();
app.use(express.json())
app.use(cors());
app.use("/", rt);
app.listen(5000);
