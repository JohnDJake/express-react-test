const env = process.env.NODE_ENV || "development";

if (env === "development") require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const verifyToken = require("./middleware/verifyToken");

if (env === "production") app.use(express.static("client/build"));

app.use("/api/auth", require("./controllers/auth"));

app.get("/api/data", verifyToken, (req, res) => res.json([{ id: 1, title: "data1" }, { id: 2, title: "data2" }]));

app.get((req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));

db.sequelize.sync().then(() => app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}`)));

