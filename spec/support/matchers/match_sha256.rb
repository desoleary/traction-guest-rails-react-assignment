# frozen_string_literal: true

SHA256_FORMAT = /\A\h{64}\z/.freeze

RSpec::Matchers.define :match_sha256 do
  match do |actual|
    expect(actual).to match(SHA256_FORMAT)
  end
end
