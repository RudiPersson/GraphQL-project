import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL server woks");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(8080, () =>
  console.log(
    "Server running on port localhost:8080. For grapqQl: localhost:8080/graphql"
  )
);
