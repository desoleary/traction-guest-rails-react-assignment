# frozen_string_literal: true

namespace :graphql do
  def paths(filename)
    %W(./frontend/src/graphql/#{filename})
  end


  desc 'Generate the graphql ruby introspection schema.json file'
  task "generate-schema": :environment do
    INTROSPECTIVE_PATHS = paths('schema.json')
    SDL_PATHS = paths('typeDefs.js')

    Graphql::SchemaGenerator.generate_query_introspection_files(INTROSPECTIVE_PATHS)

    Graphql::SchemaGenerator.generate_schema_definition_language_files(SDL_PATHS)

    puts 'Following GraphQL schema files successfully generated!'.green

    puts (INTROSPECTIVE_PATHS + SDL_PATHS).join("\n\r")
  end
end
