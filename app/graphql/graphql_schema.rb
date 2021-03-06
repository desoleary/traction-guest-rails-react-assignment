# frozen_string_literal: true

class GraphqlSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections
end

GraphQL::Relay::BaseConnection.register_connection_implementation(
  ActiveRecord::Relation,
  GraphQL::Relay::RelationConnection
)
