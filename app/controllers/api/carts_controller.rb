class Api::CartsController < ApplicationController    



    def index 

        @cart = Cart.all
        render :index

    end 



    def create 

        @cart = Cart.find_or_initialize_by(user_id: params[:user_id], product_id: params[:product_id])

        @cart.quantity ||= 0

        if @cart.save
            @cart.quantity = params[:quantity].to_i
            @user = User.find_by(user_id: params[:user_id])
            @cart_products = Cart.includes(:product).where(user_id: @user.id)
            render :show
        else 
            render json {errors: @cart.errors.full_messages}, status: 422
        end 

    end


    def show 

        @cart_products = Cart.includes(:product).where(user_id: @user.id)

        render :show

    end 


    def update 

        @cart = Cart.find_by(user_id: params[:user_id], product_id: params[:product_id])

        if @cart.save 
            @cart.quantity = params[:quantity].to_i
            @user = User.find_by(user_id: params[:user_id])
            @cart = Cart.includes(:product).where(user_id: @user.id)
            render :show

        elsif @cart == nil

            render json: {errors: @cart.errors.full_messages}, status: 422

        else 

            render json: {errors: @cart.errors.full_messages}, status: 422

        end 


    end


    def destroy 

        if params[:product_id] != nil
            @cart_products = Cart.includes(:product).where(user_id: params[:user_id], product_id: params[:product_id])
            @cart_products.where(product_id: params[:product_id]).delete_all
            render :show
        else 
            @cart_items = Cart.includes(:product).where(user_id: params[:user_id])
            @cart_items.delete_all
            render :show
        end 
        
    end 
    
    
    
    def set_user
        
        @user = current_user
        
        if @user == nil 
            render json: {errors: ['No current user']}
        end 
        
    end 
    
    
    def set_cart 
        
        @cart = Cart.find_by(user_id: @user.id, product_id: params[:product_id])

        if @cart == nil
            render json: {errors: ['Product could not be found']}
        end 

    end 

end 