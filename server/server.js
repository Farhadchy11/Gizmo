import express from "express";
import jwt from "jsonwebtoken";
import { MongoClient, ServerApiVersion } from "mongodb";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
const PORT = 5050;
const key = "farhad@$";

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

    // app.use("/", (req, res) => {
    //   res.send("server is running");
    // });

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

    // app.post("/create-payment-intent", async (req, res) => {
    //   const { totalPrice } = req.body;
    //   const amount = parseInt(totalPrice * 100);

    //   const paymentIntent = await stripe.paymentIntents.create({
    //     amount: amount,
    //     currency: "usd",
    //     payment_method_types: ["card"],
    //   });
    //   res.send({
    //     clientSecret: paymentIntent.client_secret,
    //   });
    // });

    // app.delete("/users/:id", async (req, res) => {
    //   const { ids } = req.body;
    //   const query = { _id: new ObjectId(ids) };
    //   const result = await userCollection.deleteOne(query);
    //   res.send(result);
    // });
  } catch (error) {
    console.log("Error connecting to MongoDB Atlas:", error);
  }
}

run();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
