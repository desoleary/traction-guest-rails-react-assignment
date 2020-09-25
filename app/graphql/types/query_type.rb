# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :user, Types::User, null: false do
      description 'Fetch User by id'
      argument :id, ID, required: true
    end

    def user(id:)
      ::User.find(id)
    end
  end
end
