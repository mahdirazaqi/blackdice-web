import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: new URL("graphql", process.env.NEXT_PUBLIC_BASE_URL).href,
  cache: new InMemoryCache(),
});
