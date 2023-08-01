class Api::CartsController < ApplicationController    


   def create 

    @cart = Cart.new(cart_params)

    @user = current_user

        if @cart.save 
            render :show
        else 
            render json: {errors: @cart.errors.full_messages}, status: 422
        end 

   end 


   def update 

        @cart = Cart.find_by(id: params[:id])

        if @cart.update(cart_params)
            render :show
        else 
            render json: {errors: @cart.errors.full_messages}, status: 422
        end 

    end 


    def destroy 

        @cart = Cart.find_by(id: params[:id])

        if @cart
            @cart.delete
            render json: {message: ["Cart is empty"]}
        end
        
    end 

   
    def cart_params

        params.require(:cart).permit(:id, :product_id, :user_id, :quantity)

    end 


end 