import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5050;

const allowedOrigins = [
  "https://ecommerceclient-299f6w3yb-farhads-projects-63b63f68.vercel.app",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, key, {
    expiresIn: "2h",
  });
  res.send({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
