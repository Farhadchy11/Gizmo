import express from "express";
import jwt from "jsonwebtoken";
//import crypto from "crypto";
//import mongoose from "mongoose";
//import dotenv from "dotenv";
//dotenv.config();
import User from "./model/user.js";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
const PORT = 5050;
//const secretBytes = crypto.randomBytes(32);
//const key = secretBytes.toString("base64");
//const key = secretBytes.toString("hex");

//var key = require('crypto').randomBytes(48).toString('hex');
const key = "farhad@$";

// mongoose
//   .connect(
//     "mongodb+srv://farhadchy500:farhad140@cluster0.xdeylsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

//
app.post("/jwt", async (req, res) => {
  // console.log(req.headers)
  const user = req.body;
  const token = jwt.sign(user, key, {
    expiresIn: "2h",
  });
  res.send({ token });
});

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, key, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
};

// app.post("/verify", async (req, res) => {
// const token = req.headers.authorization.split(" ")[1];

//  jwt.verify(token, key, (error, data) => {
//    if (error) {
//      return res.status(401).send({ message: "forbidden access" });
//    }else {
//       return res.status(401).send({ message: "valid token", data});
//    }
//   })

// });

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

// app.post('/products', verifyToken, async (req, res) => {
//       const item = req.body;
//       const result = await productCollection.insertOne(item);
//       res.send(result)
//     })

// app.post("/products", async (req, res) => {
//    try {
//     const user = await User.create(req.body);
//     //res.json(users);
//     res.status(201).json(user);
//    } catch (error) {
//      console.error("Error fetching users:", error);
//      res.status(500).json({ error: "Internal Server Error" });
//    }
//  });

// app.get("/users", async (req, res) => {
//   const user = await User.find();
//   res.send(user);
//   console.log(user);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
