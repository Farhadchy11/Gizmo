import express from "express";
//import jwt from "jsonwebtoken";
//import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
//import User from "./model/user.js";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
const PORT = 5050;
//const key = "farhad@$";

const uri =
  "mongodb+srv://farhadchy500:farhad140@clusterdata.cmjpztk.mongodb.net/?retryWrites=true&w=majority&appName=Clusterdata";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    console.log("Connected to MongoDB Atlas!");

    const userCollection = client.db("ecommerce").collection("users");

    // app.post("/users", async (req, res) => {
    //    try {
    //     const user = await User.create(req.body);
    //     //res.json(users);
    //     res.status(201).json({ message: "User created successfully", user });
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //     res.status(500).json({ error: "Internal Server Error" });
    //    }
    //  });

    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const result = await userCollection.insertOne(user);
        res.status(201).json(result);
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas:", error);
  }
}

run();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
