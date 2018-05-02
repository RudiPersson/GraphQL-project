import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL server woks");
});

app.listen(8080, () => console.log("Server running on port localhost:8080"));
