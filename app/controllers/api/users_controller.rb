class Api::UsersController < ApplicationController


    # before_action :require_logged_out, only:[:create]
    before_action :require_logged_in, only: [:destroy]

    wrap_parameters include: User.attribute_names + ["password"]

    def create 
        @user = User.new(user_params)

        if @user.save 
            login(@user)
        else 
            render json: @user.errors.full_messages, status: 422
        end 
        
    end 


    private 
    def user_params
        params.require(:user).permit(:username, :password)
    end 

end 