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
            #this might need to render the product show view instead
            # probably not though
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


#Double check index & show for Products controller is accurate with information,
# and check if destroy is working
### Currently no destroy, but index and show are both working

#Double check Product#avg_rating is working, and add decimal precision
### no decimal precision, but it is working

#Don't need to rename Review table, thats what it is on Etsy.

#Change the name of jBuilder object from owners to users, since it will now
# apply to the review Users (reviewers) as well. Its also just more readable and dynamic

#After Owner object name change, alter the front-end so that the reducers and such
# are properly referencing back-end data responses

#Create Views for the Reviews Controller

#** Make the Cart state on the front end independent, very important **
# This includes: _current_user.jbuilder, cart controller, and nearly all frontend
#   reducers with regards to the entities slice.