class Visitor < ApplicationRecord
  belongs_to :organization

  validates_presence_of :last_name, :organization, :signed_in_at, :signed_out_at
  validates :first_name, presence: true, length: { minimum: 2 }
  validates :email,
            presence: true,
            format: {
                with: URI::MailTo::EMAIL_REGEXP, message: 'must be a valid email'
            }
end
