import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5050;

async function run() {
  try {
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
