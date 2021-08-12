import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { loginMutation } from "./loginmutation";
const client = new ApolloClient({
  uri: "https://faxclientapi.qa.r53.j2.com/graphql",
  cache: new InMemoryCache(),
});

export const signIn = async (_username, _password) => {
  try {
    await client.cache.data.clear();
    const result = await client
      .mutate({
        mutation: loginMutation,
        variables: { username: _username, password: _password },
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    console.log(result);
    return result;
  } catch (ex) {
    console.log(ex);
    return ex;
  }
};
