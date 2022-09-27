json.products do end
json.owners do end
json.reviews do end
# json.reviews do
#     json.merge! @reviews
# end

@products.each do |product|
    json.products do 
        json.set! product.id do
            json.extract! product, :id, :name, :category, :description, :owner_id, :stock
            json.price product.price_string
        end
    end

    json.owners do 
        json.set! product.owner.id do
            json.extract! product.owner, :id, :email, :name
        end
    end

    product.user_reviews.each do |review|
        json.owners do
            json.set! review.reviewer.id do
                json.extract! review.reviewer, :id, :email, :name
            end
        end
    end
    
end

@reviews.each do |product_id, reviews|
    json.reviews do
        json.set! product_id do 
            json.array!(reviews) do |review|
                json.extract! review, :id, :product_id, :reviewer_id, :rating, :review
            end
            # json.merge! reviews
        end
    end
end

# @reviews.each do |review|
#     json.reviews do
#         json.set! review.product_id do
#             json.merge! review
#         end
#     end

#     reviews[review.product_id] << (json.extract! review, :id, :product_id, :reviewer_id, :rating, :review)
                                    
                                
    
#     json.owners do
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