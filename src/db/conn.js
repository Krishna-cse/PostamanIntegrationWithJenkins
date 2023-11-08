// db/conn.js
import mongoose from "mongoose";

const dbURL = "mongodb://localhost:27017/api";

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

export default mongoose.connection;
