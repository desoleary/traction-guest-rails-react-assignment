# frozen_string_literal: true

require 'rails_helper'

module Types
  RSpec.describe User, type: :graphql do
    subject { described_class }

    it { is_expected.to have_field(:id).of_type(!types.ID) }
    it { is_expected.to have_field(:email).of_type(types.String) }
  end
end
