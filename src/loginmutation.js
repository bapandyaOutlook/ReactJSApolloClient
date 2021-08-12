import gql from "graphql-tag";

export const loginMutation = gql`
  mutation Login($username: String, $password: String) {
    login(username: $username, password: $password) {
      __typename

      ... on Authenticate {
        token
      }

      ... on ApiError {
        object_type
        code
        message
      }
    }
  }
`;
