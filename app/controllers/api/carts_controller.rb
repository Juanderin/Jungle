class Api::CartsController < ApplicationController    

    def index 
        # debugger 
       @carts = Cart.all.where(user_id: current_user.id)

        render :index

    end 


    def show 

        @cart = Cart.find_by(id: params[:id])

        render :show
        
    end     


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

        if @cart && @cart.update(cart_params)
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


    def delete_all 

        user = User.find_by(id: current_user.id)

        carts = user.carts

        if carts
            carts.destroy_all
            render json: {message: ['All items deleted']}
        else 
            render json: {message: ['Error in deletion, no items exists']}
        end 

    end 

   
    def cart_params

        params.require(:cart).permit(:id, :product_id, :user_id, :quantity)

    end 


end 