json.products do end
json.owners do end
json.reviews do end

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

    product.user_reviews.each do |user_review|
        json.reviews do
            json.set! user_review.id do
                json.extract! user_review, :id, :product_id, :reviewer_id, :rating, :review
            end
        end
        
        json.owners do
            json.set! user_review.reviewer.id do
                json.extract! user_review.reviewer, :id, :email, :name
            end
        end
    end

end

# @products.user_reviews.each do |user_review|
#     json.reviews do
#         json.set! user_review.id do
#             json.extract! user_review, :id, :product_id, :reviewer_id, :rating, :review
#         end
#     end
    
#     json.owners do
#         json.set! user_review.reviewer.id do
#             json.extract! user_review.reviewer, :id, :email, :name
#         end
#     end
# end