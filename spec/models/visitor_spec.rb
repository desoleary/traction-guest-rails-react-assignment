require 'rails_helper'

RSpec.describe Visitor, type: :model do
  subject { build_stubbed(:visitor) }

  describe 'validators' do
    it { is_expected.to belong_to(:organization) }
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_length_of(:first_name).is_at_least(2) }
    it { is_expected.to validate_presence_of(:last_name) }
    it { is_expected.to validate_presence_of(:signed_in_at) }
    it { is_expected.to validate_presence_of(:signed_out_at) }
  end
end
