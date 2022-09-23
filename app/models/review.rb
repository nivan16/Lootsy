class Review < ApplicationRecord
    validates :product_id, :reviewer_id, :rating, presence: true
    validates :review, length: { minimum: 5, allow_nil: true }
    validates :rating, inclusion: { in: 1..5 }

    validates :reviewer_id, uniqueness: { 
        scope: :product_id,
        message: "You can only leave one review per item!"
    }

    belongs_to :products,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: :User


end
