# frozen_string_literal: true

require 'rails_helper'

describe TokenGenerator do

  subject { create(:visitor_invite) }

  it 'generates a valid sha256 token' do
    expect(subject.token).to match_sha256
  end
end
