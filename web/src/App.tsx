import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./apollo/client";
import WaitAuth from "./auth/WaitAuth";
import Router from "./router/Router";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <WaitAuth>
        <Router />
      </WaitAuth>
    </ApolloProvider>
  );
};

export default App;
