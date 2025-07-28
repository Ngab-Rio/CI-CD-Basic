import express from "express";

const app = express();
const port = 80;
const host = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("Hello from Express with CI/CD!");
});

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
