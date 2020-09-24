# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validators' do
    it { is_expected.to belong_to(:organization) }
  end
end
