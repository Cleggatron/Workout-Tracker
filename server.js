const express = require("express");


const PORT = process.env.port || 3001;
const app = express();

//set up our middle wares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//set up routing

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})