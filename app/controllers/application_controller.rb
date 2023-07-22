class ApplicationController < ActionController::API

    include ActionController::RequestForgeryProtection

    protect_from_forgery with: :exception
    before_action :snake_case_params, :attach_authenticity_token


    def test
        if params.has_key?(:login)
          login!(User.first)
        elsif params.has_key?(:logout)
          logout!
        end
      
        if current_user
          render json: { user: current_user.slice('id', 'username', 'session_token') }
        else
          render json: ['No current user']
        end
      end


    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def logged_in?
        !!current_user
    end 


    def require_logged_in
        unless logged_in?
            render json: { errors: ['Must be logged in.']}, status: :unauthorized
        end
    end 


    def require_logged_in
        if logged_in?
            render json: {errors: ['Must be logged out']}, status: 403
        end 
    end 


    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user 

    end 


    def snake_case_params
        @params_user = user 
    end 


    def logout 
        current_user.reset_session_token!
        session[:session_token] = user.reset_session_token!
        @current_user = nil
    end 


private
    def attach_authenticity_token
        headers['X-CSRF-Token'] = masked_authenticity_token(session)
        # headers['X-CSRF-Token'] = form_authenticity_token  # can use this one or the other one 
    end 
    
    
    def snake_case_params 
        params.deep_transform_keys!(&:underscore) 
    end

end

