const express = require("express");

const PORT = proces.env.port || 3001;
const app = express();

//set up our middle wares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})