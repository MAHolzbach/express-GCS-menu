var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");

//GraphQL Schema
var schema = buildSchema(`
  type Query {
    message: String
  }
`);

//Root resolver
var root = {
  message: () => "Hello world!"
};

//Express server w/ graphQL endpoint
var app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL server running on loacalhost:4000/graphql")
);
