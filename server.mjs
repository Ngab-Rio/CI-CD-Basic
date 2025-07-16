import express from "express";

const app = express();
const port = 3000;
const host = "0.0.0.0";

app.get('/', (req, res) => {
  res.send('Welcome to my server, Implemented CI/CD');
});

app.get('/halo', (req, res) => {
  res.send('Hello from Express')
});

app.listen(host, port, () => {
  console.log(`Server is running on ${host}:${port}`);
});
