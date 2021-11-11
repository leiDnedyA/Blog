const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoute = require("./routes/api");
const app = express();
const PORT = /* process.env.PORT */ 3000;

/*
REMINDER: Switch port back to 3000 when deploying in nodemonj.json. Set to 3001 for testing
*/

//Middlewares
app.use(bodyParser.json());

//routes
app.use("/api", apiRoute);
app.use(express.static(path.join(__dirname, "build")));

//server & db connections
mongoose.connect("mongodb+srv://aydab:" +
  process.env.MONGO_ATLAS_PW +
  "@cluster0.ew9vh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", ()=>{
    console.log("Connected to database")
  })

app.listen(process.env.PORT || PORT, () => {
  console.log(`SERVER is listening on port: ${process.env.PORT || PORT}`);
});
