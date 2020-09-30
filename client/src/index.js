import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Pages from "./pages";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  // typeDefs: "./grapqhql/schema.graphql"
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
