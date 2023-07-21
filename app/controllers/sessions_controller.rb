class Api::SessionsController < ApplicationController    

    # before_action :require_logged_in  #not finished 
    # before action :require_logged_out 
   
   def show 
        @user = current_user 
        if @user
            render 'api/users/show'
        else 
            render json: {user: nil}
        end 
    end 


    def create 
        @user = User.find_by_credentials(params[:username], params[:password])

        if @user
            login(@user)
            render 'api/users/show'
        else 
            render json: {errors: ['invalid credentials']}, status: 422
        end 
        
    end 


    def destroy 
        logout 
        head :no_content
    end 

end 
