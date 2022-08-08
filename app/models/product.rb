class Product < ApplicationRecord
    validates :name, :description, :category, :price, :user_id, presence: true
    validates :category, inclusion: { 
        in: ["weapons", "jewelry and accessories", "clothing and armor", "art and collectables", "miscellaneous"],
        message: "%{value} is not a valid category"
    }
    
    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
