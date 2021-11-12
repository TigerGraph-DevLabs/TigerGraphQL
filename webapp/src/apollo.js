import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
  uri: "http://localhost:8080/graphql",
  headers: {
    "Content-Type": "application/graphql",
  },
  cache: new InMemoryCache({
    addTypename: false
  }),
});