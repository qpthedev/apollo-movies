import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://z37h3.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

export default client;
