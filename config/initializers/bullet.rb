# frozen_string_literal: true

if defined?(Bullet)
  Bullet.enable = true

  if Rails.env.development?
    Bullet.bullet_logger = true
  elsif Rails.env.test?
    Bullet.raise = true
  end
end
