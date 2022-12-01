json.products do end
json.users do end
# json.reviews do end
# json.reviews do
#     json.merge! @reviews
# end

@products.each do |product|
    json.products do 
        json.set! product.id do
            json.extract! product, :id, :name, :category, :description, :owner_id, :stock

            json.price product.price_string
            json.avg_rating product.avg_rating
        end
    end

    #is it bad that I cant ever really remove user info from the state on the front end??
    json.users do 
        json.set! product.owner.id do
            json.extract! product.owner, :id, :email, :name
        end
    end



    # product.user_reviews.each do |review|
    #     json.users do
    #         json.set! review.reviewer.id do
    #             json.extract! review.reviewer, :id, :email, :name
    #         end
    #     end
    # end
    
end

# @reviews.each do |product_id, reviews|
#     json.reviews do
#         json.set! product_id do 
#             json.array!(reviews) do |review|
#                 json.extract! review, :id, :product_id, :reviewer_id, :rating, :review
#             end
#             # json.merge! reviews
#         end
#     end
# end

# Maybe instead of fetching all reviews and extracting it just for the index page, I should just create a method that
#     allows me to calculate the average rating of the reviews.
# Also *might* need the amount of reviews on products (which means i need to seed alot of reviews as well)



# @reviews.each do |review|
#     json.reviews do
#         json.set! review.product_id do
#             json.merge! review
#         end
#     end

#     reviews[review.product_id] << (json.extract! review, :id, :product_id, :reviewer_id, :rating, :review)
                                    
                                
    
#     json.users do
#         json.set! review.reviewer.id do
#             json.extract! review.reviewer, :id, :email, :name
#         end
#     end
# end

# json.reviews do 
#     json.merge! reviews
# end
# json.reviews do 
#     json.set! product.id do
#         json.array!(product.reviews)
#     end
# end