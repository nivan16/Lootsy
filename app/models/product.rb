class Product < ApplicationRecord
    validates :name, :description, :category, :price, :user_id, presence: true
    validates :category, inclusion: { 
        in: ["Weapons", "Jewelry & Accessories", "Clothing & Armor", "Art & Collectables", "Miscellaneous"],
        message: "%{value} is not a valid category"
    }
    
    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
