# frozen_string_literal: true

module Graphql
  class GraphqlResponseWrapper
    def initialize(graphql_query_result)
      result = graphql_query_result.clone
      if graphql_query_result.is_a?(String)
        result = JSON.parse(graphql_query_result, symbolize_names: true)
      end

      @graphql_query_result = result.to_h.deep_symbolize_keys
    end

    def data
      RecursiveOpenStruct.new(@graphql_query_result[:data])
    end

    def attributes
      RecursiveOpenStruct.new(@graphql_query_result[:data][self.mutation_name])
    end

    def mutation_name
      @graphql_query_result[:data].keys.first
    end

    def errors?
      self.errors.present?
    end

    def errors
      @errors ||= GraphqlErrors.new(@graphql_query_result[:errors] || [])
    end

    def error_messages
      self.errors.to_a
    rescue StandardError
      @graphql_query_result[:errors]
    end
  end
end
