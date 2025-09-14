import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
//import User from "./model/user.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5050;

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

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, key, {
        expiresIn: "2h",
      });
      res.send({ token });
    });
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
}

run();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
