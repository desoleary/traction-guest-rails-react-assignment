# frozen_string_literal: true

FactoryBot.define do
  factory :visitor_invite do
    email { Faker::Internet.email }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    start_at { 2.hours.ago }
    end_at { 1.hour.ago }
    notes { Faker::Quote.famous_last_words }
    token { Digest::SHA256.hexdigest(rand(10_000_000).to_s) }

    association :sender, factory: :user
    association :recipient, factory: :visitor
    association :organization
  end
end
