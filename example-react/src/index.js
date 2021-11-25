import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

function Root() {
  const [apolloClient, setApolloClient] = useState(null);

  useEffect(() => {
    const initApolloClient = async () => {
      let config = await (await fetch("/config.json")).json();
      let apolloClient = new ApolloClient({
        uri: config["apolloURL"],
        headers: {
          "Content-Type": "application/graphql",
        },
        cache: new InMemoryCache(),
      });
      setApolloClient(apolloClient);
    };

    initApolloClient();
  }, []);

  if (!apolloClient) {
    return <div>init...</div>;
  }

  return (
    <React.Fragment>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </React.Fragment>
  );
}

ReactDOM.render(
  <Root />,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
if (module.hot) {
  module.hot.accept();
}
