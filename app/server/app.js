const express = require("express");
const path = require("path");
const dataAbout = require("./data/about.json");
const dataKashi = require("./data/Kashi-Vishwanath-Darshan.json");
const dataPlaces = require("./data/Top-10-Places-in-Varanasi.json");
const dataCarRental = require("./data/carHire.json");
const dataTaxiService = require("./data/taxi-and-cab-booking-service-in-varanasi.json");
const dataVidhayanchal = require("./data/vindhayachal.json");
const dataGaya = require("./data/gaya.json");
const dataAllahabad = require("./data/allahabad.json");
const bodyParser = require("body-parser");

// Init express
const app = express();

// app.get("/", (req, res) => {
//   res.send("Server Running...");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Sending SMS
// require("./textMessage")(app);
// Sending Email
require("./email")(app);

// Dynamic Serving of Data From Backend
// app.get("/:name", (req, res) => {
//   var name = req.params.name;
//   if (data[name]) {
//     console.log("req recieved with name" + name + "with data " + data[name]);
//     res.json(data[name]);
//   } else res.json("error");
// });

// Serving of Data From Backend
app.get("/about", (req, res) => {
  res.json(dataAbout);
});
app.get("/kashiVishwanath", (req, res) => {
  res.json(dataKashi);
});
app.get("/places", (req, res) => {
  res.json(dataPlaces);
});
app.get("/carRental", (req, res) => {
  res.json(dataCarRental);
});
app.get("/taxiService", (req, res) => {
  res.json(dataTaxiService);
});
app.get("/vindhyachal", (req, res) => {
  res.json(dataVidhayanchal);
});
app.get("/allahabad", (req, res) => {
  res.json(dataAllahabad);
});
app.get("/gaya", (req, res) => {
  res.json(dataGaya);
});

// Hoisting purpose
if (true || process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
  app.get("*", (req, res) => {
    console.log("* endpoing express")
    res.sendFile(path.resolve("./", "build", "index.html"));
  });
}

// Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
