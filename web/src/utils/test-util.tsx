import { ApolloProvider } from "@apollo/client";
import { createMemoryHistory, MemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { client } from "../apollo/client";
import { store } from "../store";

export const Wrapper: React.FC<{
  children: JSX.Element;
  history?: MemoryHistory;
}> = ({
  children,
  history = createMemoryHistory({ initialEntries: ["/"] }),
}) => {
  return (
    <Router location={history.location} navigator={history}>
      <Provider store={{ ...store }}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </Provider>
    </Router>
  );
};
