# frozen_string_literal: true

class VisitorInvite < ApplicationRecord
  include TokenGenerator

  EXPIRES_IN_DAYS = 7

  belongs_to :organization
  belongs_to :sender, class_name: User.name
  belongs_to :recipient, class_name: Visitor.name, optional: true

  before_validation(on: :create) { generate_token(:token) }

  validates_presence_of :last_name, :sender, :organization, :start_at, :end_at

  validates :first_name, presence: true, length: { minimum: 2 }
  validates :email,
            presence: true,
            format: {
              with: URI::MailTo::EMAIL_REGEXP, message: 'must be a valid email'
            }

  def self.with_token(token)
    where('created_at >= ?', Invite.expiry_date).find_by(token: token)
  end

  def self.expiry_date
    EXPIRES_IN_DAYS.days.ago
  end
end
