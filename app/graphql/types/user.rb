# frozen_string_literal: true

module Types
  class User < GraphQL::Schema::Object
    description 'User record'

    field :id, ID, null: false
    field :email, String, null: true
  end
end
