class Api::ReviewsController < ApplicationController


    def index 

        @reviews = Review.all

        render :index 

    end 


    def show 

        @reviews = Review.all.where(product_id: params[:id])

        @users = User.all 
        # @review = Review.find_by(id: params[:id])

        render :show 

    end 


    def create 

        @review = Review.new(review_params)


        if @review.save
            render :show
        else 
            render json: {errors: @review.errors.full_messages}, status: 422
        end 

    end 


    def update 

        @review = Review.find_by(id: params[:id])

        if @review && @review.update(review_params)
            render :show
        else 
            render json: {errors: @review.errors.full_messages}, status: 422
        end 

    end 


    def destroy 

        @review = Review.find_by(id: params[:id])

        if @review
            @review.destroy
            render json: {message: ["Review Deleted"]}
        end 

    end 

2
    def review_params

        params.require(:review).permit(:id, :title, :body, :rating, :user_id, :product_id)

    end 

end 
