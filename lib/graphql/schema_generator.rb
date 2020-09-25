# frozen_string_literal: true
# frozen_string_literal: true

module Graphql
  include SchemaTypes

  class SchemaGenerator
    def initialize(paths)
      @paths = Array(paths)
    end

    def self.generate_query_introspection_files(paths)
      @instance = self.new(paths)
      @instance.send(:write) do
        SchemaPrinter.print
      end
    end

    def self.generate_schema_definition_language_files(paths)
      @instance = self.new(paths)
      @instance.send(:write) do
        sql = SchemaPrinter.print SchemaTypes::SCHEMA_DEFINITION_LANGUAGE

        <<TEXT
import gql from 'graphql-tag';

const typeDefs = gql`
  #{sql}
`;
export default typeDefs;
TEXT
      end
    end

    private
      def write(&block)
        content = yield
        @paths.each { |path| File.open(path, 'w') { |file| file.write(content) } }
        content
      end
  end
end
