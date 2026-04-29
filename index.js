const express = require("express");

const app = express();
const PORT = 3000;

// Middleware (optional)
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Example API route
app.get("/api", (req, res) => {
    res.json({ message: "This is an API response" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
