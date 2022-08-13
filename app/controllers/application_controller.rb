class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = current_user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token! #something to do with nil == nil returns true, need to ask
        session[:session_token] = nil
        current_user = nil
    end

    def ensure_logged_in
        render json: ["Must be logged in!"], status: 404 unless logged_in?
    end

    def ensure_logged_out
        render json: ["Must be logged out!"], status: 404 if logged_in?
    end


end
