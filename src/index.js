require("dotenv").config({ path: "src/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes=require("../src/routes/authRoute");
const blogRoutes=require("../src/routes/blogRoute");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoutes);
app.use("/api/blogs",blogRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/",(req,res)=>{
  res.send("Backend Server is running");
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
