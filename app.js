const express = require("express");
const compression = require("compression");
const cors = require("cors");
const router = require("./routes/route");

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors());         // Enable CORS for cross-origin requests
app.use(compression());  // Compress responses to reduce payload size

//ROUTES
app.use("/api/classify-number", router);

// Start the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));