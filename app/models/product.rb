class Product < ApplicationRecord
    validates :name, :description, :category, :price, :owner_id, presence: true
    validates :category, inclusion: { 
        in: ["weapons", "jewelry and accessories", "clothing and armor", "art and collectables", "miscellaneous"],
        message: "%{value} is not a valid category"
    }
    
    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :cart_items,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :CartItem,
        dependent: :destroy
end
