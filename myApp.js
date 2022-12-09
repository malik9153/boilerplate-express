let express = require("express");
let app = express();

app.get("/", (req, res) => {
    absolutePath = __dirname + "/views/index.html"
  res.send(absolutePath);
});


module.exports = app;
