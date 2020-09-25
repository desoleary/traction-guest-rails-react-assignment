# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    association(:organization)

    after(:build) do |user|
      user.password = Devise.friendly_token[0, 20]
    end
  end
end
