class Product < ApplicationRecord
    validates :name, :description, :category, :price, :user_id, presence: true

    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
