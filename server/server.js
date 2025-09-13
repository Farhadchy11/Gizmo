import express from "express";
import jwt from "jsonwebtoken";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
const PORT = 5050;

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
