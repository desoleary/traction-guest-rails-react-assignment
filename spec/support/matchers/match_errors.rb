# frozen_string_literal: true

RSpec::Matchers.define :include_errors do |expected|
  match do |actual|
    actual.valid?
    expected_messages = expected.is_a?(Array) ? expected : [expected]
    expected_messages.each do |expected_message|
      expect(actual.errors.full_messages).to include(expected_message)
    end
  end

  failure_message do |actual|
    "expected \"#{actual.errors.full_messages}\" to include \"#{expected}\""
  end
end
