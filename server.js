const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.port || 3001;
const app = express();

//set up our middle wares
app.use(express.urlencoded({extended: true}))
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})