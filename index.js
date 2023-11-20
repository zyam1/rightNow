const express = require("express");
const app = express();
const session = require("express-session");
const PORT = 3000;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));//css미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);


app.get("*", function (req, res) {
    res.render("404");
  });
app.listen(PORT, () => {
    console.log("Server Port : ", PORT);
  });
  