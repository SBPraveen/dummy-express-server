// Import Express
const express = require("express");
const axios = require('axios');

// Create an Express application
const app = express();

// Define a route
app.get("/", async (req, res) => {
  const response = await axios.get(
    "http://54.174.203.102"
  );
  res.json("This is the child and the response from the parent is:"+response.data);
});

// Start the server
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});