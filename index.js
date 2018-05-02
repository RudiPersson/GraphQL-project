import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL server woks");
});

const root = { friend: () => {
  return {
        "id": 1,
        "firstName": "Rudi",
        "lastName": "Persson",
        "gender": "Male",
        "language": "Faroese",
        "email": "Rudipersson@gmail.com"
  }
} };

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(8080, () =>
  console.log(
    "Server running on port localhost:8080. For grapqQl: localhost:8080/graphql"
  )
);
