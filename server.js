const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define API routes
app.get("/api/data", (req, res) => {
  // Handle API request
  res.json({ message: "This is an example API response" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
