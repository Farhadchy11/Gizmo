import express from "express";
//import jwt from "jsonwebtoken";
import mongoose from "mongoose";
//import { MongoClient, ServerApiVersion } from "mongodb";
import User from "./model/user.js";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
const PORT = 5050;
const key = "farhad@$";

// const userSchema = new mongoose.Schema({
//         username: String,
//         email: String,
//         // ... other user details
//     });

//    const User = mongoose.model('User', userSchema);

async function connectDB() {
  const uri =
    "mongodb+srv://farhadchy500:farhad140@cluster0.xdeylsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace placeholders

  try {
    await mongoose.connect(uri);
    console.log("Connected successfully to MongoDB Atlas using Mongoose!");

    app.post("/users", async (req, res) => {
      try {
        const user = await User.create(req.body);
        //res.json(users);
        res.status(201).json({ message: "User created successfully", user });
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (e) {
    console.log("Could not connect to MongoDB Atlas:", e);
  }
}

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
