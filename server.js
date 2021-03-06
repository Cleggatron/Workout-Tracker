const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

const router = require("./controllers")

//set up our middle wares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(router)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})