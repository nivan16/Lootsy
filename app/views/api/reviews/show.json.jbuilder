json.review do 
    json.set! @review.reviewer_id do 
        json.extract! @review, :id, :product_id, :reviewer_id, :rating, :review
    end
end
