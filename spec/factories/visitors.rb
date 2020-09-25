# frozen_string_literal: true

FactoryBot.define do
  factory :visitor do
    email { Faker::Internet.email }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    signed_in_at { 2.hours.ago }
    signed_out_at { 1.hour.ago }
    notes { Faker::Quote.famous_last_words }

    association :organization
  end
end
