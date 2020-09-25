import gql from 'graphql-tag';

const typeDefs = gql`
  type Mutation {
  """
  An example field added by the generator
  """
  testField: String!
}

type Query {
  """
  Fetch User by id
  """
  user(id: ID!): [User!]!
}

"""
User record
"""
type User {
  email: String
  id: ID!
}
`;
export default typeDefs;
