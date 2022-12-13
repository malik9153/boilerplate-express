let express = require("express");
let app = express();
require("dotenv").config();
console.log(process.env["MESSAGE_STYLE"]);
let phrase = ""
app.get("/json", (req, res) => {
  if(process.env['MESSAGE_STYLE'] === "uppercase"){
    phrase = "HELLO JSON"
  }
  else{
    phrase = "Hello json"
  }
  res.json({ message: phrase });
});

module.exports = app;
