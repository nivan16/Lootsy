class CartItem < ApplicationRecord

    validates :shopper_id, :product_id, :quantity, presence: true

    belongs_to :shopper,
        primary_key: :id,
        foreign_key: :shopper_id,
        class_name: :User

    belongs_to :product,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product
    
end
