class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        
        if @review.save
            render :show
        else
            render @review.errors.full_messages, status: 404
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render :show
        else
            render @review.errors.full_messages, status: 404
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        #need to ask if current_user is okay or should send the id of the current user from
        # the front end
        if @review && (@review.reviewer_id == current_user.id)
            @review.destroy
            render json: {}
        else
            render @review.errors.full_messages, status: 404
        end
    end



    private

    def review_params
        params.require(:review).permit(:product_id, :reviewer_id, :rating, :review)
    end
end
