json.product do 
    json.set! @product.id do
        json.extract! @product, :id, :name, :category, :image, :description, :owner_id, :stock
        json.price @product.price_string
        json.avg_rating @product.avg_rating
    end
end
json.users do 
    json.set! @product.owner.id do
        json.extract! @product.owner, :id, :email, :name
    end
end

json.reviews do end

@reviews.each do |review|
    json.reviews do
        json.set! review.reviewer.id do
            json.extract! review, :id, :product_id, :reviewer_id, :rating, :review
        end
    end

    #these are the reviewer IDs
    json.users do
        json.set! review.reviewer.id do
            json.extract! review.reviewer, :id, :email, :name
        end
    end
end