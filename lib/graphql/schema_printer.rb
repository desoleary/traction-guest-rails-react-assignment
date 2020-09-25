# frozen_string_literal: true

module Graphql
  include SchemaTypes

  class SchemaPrinter
    INTROSPECTION_QUERY = GraphQL::Introspection::INTROSPECTION_QUERY

    def self.print(type = SchemaTypes::QUERY_INTROSPECTION)
      self.new.send(type)
    end

    private
      def query_introspection
        JSON.pretty_generate(GraphqlSchema.execute(INTROSPECTION_QUERY))
      end


      def schema_definition_language
        GraphQL::Schema::Printer.print_schema(GraphqlSchema)
      end
  end
end
