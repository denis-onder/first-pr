const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const port = process.env.PORT || 8000;
const issues = require("./routes/api/issues");
const path = require("path");

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));

// Router
app.use("/api/issues", issues);

if (config.environment === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Server
app.listen(port, () => console.log(`Server is running on port: ${port}.`));
