const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") app.use(express.static("client/build"));

app.get("/api/data", (req, res) => res.json(["data1", "data2"]));

app.get((req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")));

app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}`));

