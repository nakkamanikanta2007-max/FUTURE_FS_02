const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leads", require("./routes/leads"));

// Home Route
app.get("/", (req, res) => {
  res.send("LeadSphere CRM API Running");
});

// Use Render's port in production
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});