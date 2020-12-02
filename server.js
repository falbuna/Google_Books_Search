const express = require("express");

const routes = require("./routes")
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://falbuna:ayanami1@cluster0.une49.mongodb.net/googlebooks?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});