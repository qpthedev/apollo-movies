import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://8zcgd.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

export default client;
