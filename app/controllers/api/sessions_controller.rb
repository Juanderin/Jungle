# class Api::SessionsController < ApplicationController    

#     # before action :require_logged_out, only: [:create]
#     # before_action :require_logged_in,  only: [:destroy] #not finished 
   
#    def show 
#         @user = current_user 
#         if @user
#             render 'api/users/show'
#         else 
#             render json: {user: nil}
#         end 
#     end 


#     def create 
#         @user = User.find_by_credentials(params[:username], params[:password])

#         if @user
#             login(@user)
#             render 'api/users/show'
#         else 
#             render json: {errors: ['invalid credentials']}, status: 422
#         end 
        
#     end 


#     def destroy 
#         logout 
#         head :no_content
#     end 

# end 



class Api::SessionsController < ApplicationController
    def show
      if current_user
        @user = current_user
        render 'api/users/show'
      else
        render json: { user: nil }
      end
    end
  
    def create
      @user = User.find_by_credentials(params[:credential], params[:password])
  
      if @user
        login!(@user)
        render 'api/users/show'
      else
        render json: { errors: ['The provided credentials were invalid.'] }, 
          status: :unauthorized
      end
    end
  
    def destroy
      logout!
      render json: { message: 'success' }
    end
  end
  