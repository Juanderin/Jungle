class Api::SessionsController < ApplicationController    

    # before action :require_logged_out, only: [:create]
    before_action :require_logged_in,  only: [:destroy] #not finished 
   
   def show 
        @user = current_user 
        if @user
            render 'api/users/show'
        else 
            render json: {user: nil}
        end 
    end 


    def create 
        @user = User.find_by_credentials(params[:credential], params[:password])

        if @user
            login(@user)
            render 'api/users/show'
            # render json: {}
        else 
            render json: {errors: ['invalid credentials']}, status: 422
        end 
        
    end 


    def destroy 
        logout 
        # head :no_content

        render json: {message: 'success' }
    end 

end 

