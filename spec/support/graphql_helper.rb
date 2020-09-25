# frozen_string_literal: true

module GraphqlHelper
  # Parses graphql response class
  #
  # @param [GraphQL::Query::Result] graphql_query_result
  # @return [GraphqlResponseWrapper]
  def graphql_response_wrapper(graphql_query_result)
    Graphql::GraphqlResponseWrapper.new(graphql_query_result)
  end
end
