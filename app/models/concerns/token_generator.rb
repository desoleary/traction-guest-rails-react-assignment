# frozen_string_literal: true

module TokenGenerator
  extend ActiveSupport::Concern

  def generate_token(column)
    self[column] =
        Digest::SHA256.hexdigest(
          [Time.now.to_i, Rails.application.secrets.secret_key_base].join
        )
  end
end
