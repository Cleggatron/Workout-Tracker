const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.port || 3001;
const app = express();

//set up our middle wares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//set up routing
app.get("/", function(req, res){
    res.sendFile("index.html")
})

app.get("/exercise", function(req, res){
    res.sendFile("exercise.html")
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})