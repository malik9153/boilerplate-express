let express = require("express");
let app = express();
require("dotenv").config();
app.get("/json", (req, res) => {
    res.json({ message: "Hello json" });
});


module.exports = app;
