# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Organization, type: :model do
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_length_of(:name).is_at_least(3).is_at_most(50) }
end
