# frozen_string_literal: true

require 'rails_helper'

describe 'Duplicates API', type: :request do
  describe 'GraphQL Queries' do
    describe 'Fetch User' do
      let(:query) do
        <<~GRAPHQL
          query User($id: ID!) {
              user(id: $id) {
                id
                email
              }
            }
        GRAPHQL
      end

      let(:user) { create(:user) }
      let(:params) { { query: query, variables: { id: user.id } } }

      context 'with user session' do
        before(:each) { sign_in user }

        it 'returns user by id' do
          post '/graphql', params: params

          expect(response).to be_ok

          response_body = JSON.parse(response.body, symbolize_names: true)
          actual = graphql_response_wrapper(response_body).data.user

          expect(actual.to_h).to eql({ id: user.id.to_s, email: user.email })
        end
      end

      context 'without user session' do
        it 'returns 401 unauthorized' do
          post '/graphql', params: params

          expect(response).to have_http_status(:redirect)
          expect(subject).to redirect_to '/users/sign_in'
        end
      end
    end
  end
end
