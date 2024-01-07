class Review < ApplicationRecord
    validates :product_id, :reviewer_id, :rating, presence: true
    validates :review, length: { minimum: 1, allow_nil: true }
    validates :rating, inclusion: { in: 1..5 }
    
    validates :reviewer_id, uniqueness: { 
        scope: :product_id,
        message: "You can only leave one review per item!"
    }

    before_validation :sanitize_written_review

    belongs_to :products,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: :User

    def sanitize_written_review
        self.review = ActionController::Base.helpers.sanitize(self.review)
        self.review = nil if self.review == ""
    end
end
