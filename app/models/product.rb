class Product < ApplicationRecord
    validates :name, :description, :category, :price, :owner_id, :stock, presence: true
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

    has_many :user_reviews,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Review,
        dependent: :destroy

    #Does this need a dependent destroy?
    # does the cart_item hasmany through need one even?
    has_many :reviewers, through: :user_reviews,
        source: :reviewer

    def price_string
        price_stringify = self.price.to_s.split(".")
        if price_stringify[1].length == 1
            price_stringify[1] += "0"
        end
        price_stringify.join(".")
    end

    def self.sanitize_query_param(query)
        sanitize_sql_like(query)
    end

end
