# frozen_string_literal: true

class Organization < ApplicationRecord
  validates :name, presence: true, length: {minimum: 3, maximum: 50}
end
