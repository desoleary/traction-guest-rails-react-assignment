# frozen_string_literal: true

module HandleErrors
  extend ActiveSupport::Concern

  included do
    rescue_from Exception, with: :render_sever_error
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  end

  def render_sever_error(error)
    ErrorNotifier.record(error) unless routing_error?(error)

    render_error(I18n.t('server_error'), 500, errors(error))
  end

  def render_not_found
    render_error(I18n.t('not_found'), 404, [])
  end

  private
    def render_error(message, status, error = nil)
      render json: { errors: { message: message }.merge(errors(error)) },
             status: status
    end

    def can_send_error?(error)
      routing_error?(error) || Rails.env.production?
    end

    def routing_error?(error)
      [
        ActiveRecord::RecordInvalid,
        ActionController::RoutingError,
        ActiveRecord::RecordNotUnique
      ].any? { |klass| error.is_a?(klass) }
    end

    def not_routing_error(error)
      !routing_error?(error)
    end

    def errors(error)
      if error.is_a? ActiveRecord::RecordInvalid
        return { errors: error.record.errors.messages }
      end

      if can_send_error?(error)
        return(
          {
            errors: {
              message: error.message,
              backtrace: Rails.backtrace_cleaner.clean(error.try(:backtrace))
            }
          }
        )
      end

      { errors: {} }
    end
end
