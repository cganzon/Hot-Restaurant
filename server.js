// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        name: "Cezar",
        phone: "1234567890",
        email: "crg@bootcampspot.com",
        id: "cganzon"
    }
];

const waitList = [
    {
        name: "Carl",
        phone: "1234567890",
        email: "carl@bootcampspot.com",
        id: "carl"
    }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays current list in json format
app.get("/api/tables", (req, res) => {
    return res.json(tables);
});

// Displays current waitlist in json format
app.get("/api/waitlist", (req, res) => {
    return res.json(waitList);
});

app.post("/api/tables", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    if (tables.length < 5) {
        tables.push(req.body);
        res.json(true);
      }
      else {
        waitList.push(req.body);
        res.json(false);
      }
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
