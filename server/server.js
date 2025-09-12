import express from "express";
import jwt from "jsonwebtoken";
//import { MongoClient } from "mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";
//import crypto from "crypto";
//import mongoose from "mongoose";
//import dotenv from "dotenv";
//dotenv.config();
//import User from "./model/user.js";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
const PORT = 5050;
// const stripe = require("stripe")(
//   "sk_test_51RabRoB0vFsStBB9Z1aLtmEbmsSjG5EabJZXbmrK6TK4CC5RQ4bRFE8Qt2GS6YXJJAJ8qN7SoSnkPQ1hZKwTngtr00f78RPBpm"
// );

//const secretBytes = crypto.randomBytes(32);
//const key = secretBytes.toString("base64");
//const key = secretBytes.toString("hex");

//var key = require('crypto').randomBytes(48).toString('hex');
//const key = "farhad@$";
//database name: datapractice
const uri =
  "mongodb+srv://farhadchy500:farhad140@clusterdata.cmjpztk.mongodb.net/?retryWrites=true&w=majority&appName=Clusterdata";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    // const database = client.db("ecommerce");
    const userCollection = client.db("ecommerce").collection("users");
    //const userCollection = database.collection("us");
    //  const productCollection = database.collection("products");

    app.post("/jwt", async (req, res) => {
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

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email };
      const user = await usersCollection.findOne(query);
      const isAdmin = user?.role === "admin";
      if (!isAdmin) {
        return res.status(403).send({ message: "forbidden access" });
      }
      next();
    };

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

    app.get("/user/admin/:email", async (req, res) => {
      const email = req.params.email;
      console.log("email:", email);
      const query = { email: email };
      const user = await userCollection.findOne(query);
      console.log("User found:", user);
      let admin = false;
      if (user) {
        admin = user?.role === "admin";
      }
      res.send({ admin });
    });

    app.get("/allusers", async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    });

    app.post("/create-payment-intent", async (req, res) => {
      const { totalPrice } = req.body;
      const amount = parseInt(totalPrice * 100); // converting to paisa/cent

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"],
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    // app.delete("/users/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };
    //   const result = await userCollection.deleteOne(query);
    //   res.send(result);
    // });
    // app.delete("/users/:id", async (req, res) => {
    //   //const id = req.params.id;
    // const { ids } = req.body;
    //   const query = { _id: new ObjectId(ids) };
    //   const result = await userCollection.deleteOne(query);
    //   res.send(result);
    // });

    // app.get("/usersFind", verifyToken, verifyAdmin, async (req, res) => {
    //   const result = await usersCollection.find().toArray();
    //   res.send(result);
    // });

    // app.patch("/users/role/:id", verifyToken, verifyAdmin, async (req, res) => {
    //   const id = req.params.id;
    //   const query = { _id: new ObjectId(id) };

    //   // ইউজারের বর্তমান রোল খুঁজে বের করা
    //   const user = await usersCollection.findOne(query);

    //   if (!user) {
    //     return res.status(404).send({ message: "User not found" });
    //   }

    //   // নতুন রোল নির্ধারণ (toggle)
    //   const newRole = user.role === "admin" ? "user" : "admin";

    //   const updatedDoc = {
    //     $set: { role: newRole },
    //   };

    //   const result = await usersCollection.updateOne(query, updatedDoc);
    //   res.send(result);
    // });

    // app.post("/products", async (req, res) => {
    //   try {
    //    // const user = await User.create(req.body);
    //      const item = req.body;
    //      const result = await productCollection.insertOne(item);
    //     //res.json(users);
    //     res.status(201).json(result);
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //     res.status(500).json({ error: "Internal Server Error" });
    //   }
    // });

    // app.post("/products", async (req, res) => {
    //   try {
    //     // const user = await User.create(req.body);
    //     const item = req.body;
    //     const result = await productCollection.insertOne(item);
    //     //res.json(users);
    //     res.status(201).json(result);
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //     res.status(500).json({ error: "Internal Server Error" });
    //   }
    // });

    // app.post("/product", async (req, res) => {
    //   try {
    //     const item = req.body;
    //     const result = await productCollection.insertOne(item);
    //     res.status(201).json({ message: "product added successfully", result });
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //     res.status(500).json({ error: "Internal Server Error" });
    //   }
    // });

    // app.post("/users", verifyToken, async (req, res) => {
    //   try {
    //     const user = await User.create(req.body);
    //     //res.json(users);
    //     res.status(201).json({ message: "User created successfully", user });
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //     res.status(500).json({ error: "Internal Server Error" });
    //   }
    // });
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

run();

// mongoose
//   .connect(
//     "mongodb+srv://farhadchy500:farhad140@clusterdata.cmjpztk.mongodb.net/?retryWrites=true&w=majority&appName=Clusterdata"
//   )
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
