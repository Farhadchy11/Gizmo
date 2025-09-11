import express from "express";
const app = express();
const PORT = 5050;

app.use('/',(req,res)=> {
   res.send("server is running")
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
