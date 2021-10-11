const express = require("express");

const PORT = proces.env.port || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})