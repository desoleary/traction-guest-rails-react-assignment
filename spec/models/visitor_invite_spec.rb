# frozen_string_literal: true

require 'rails_helper'

RSpec.describe VisitorInvite, type: :model do
  subject { build_stubbed(:visitor_invite) }

  describe 'validators' do
    it { is_expected.to belong_to(:organization) }
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_length_of(:first_name).is_at_least(2) }
    it { is_expected.to validate_presence_of(:last_name) }
    it { is_expected.to validate_presence_of(:sender) }
    it { is_expected.to validate_presence_of(:start_at) }
    it { is_expected.to validate_presence_of(:end_at) }
  end
end
