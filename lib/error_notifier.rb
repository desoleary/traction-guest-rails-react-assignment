# frozen_string_literal: true

class ErrorNotifier
  def initialize(error)
    @error = error
  end

  def self.record(error)
    instance = self.new(error)
    instance.log(error)
    instance.send_notification_for(error) if Rails.env.production?
  end

  def send_notification_for(error)
    return unless Rails.env.production?

    puts "TODO: Add sentry integration and have it being called in here.\n\n" +
             'All errors sent need to use the record function.'
  end

  def log(error)
    error_info = {
        exception: "#{error.class.name }:#{error.message}",
        trace: error.backtrace[0, 20]
    }

    message = "\n\n =========== SERVER ERROR FOUND: #{error_info[:exception]} ===========\n\n"
    message += Rails.backtrace_cleaner.clean(error.backtrace).join("\n")
    message += "\n\n #{'=' * 100} \n\n"

    Rails.logger.error(message)
  end
end
