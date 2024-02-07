class Product < ApplicationRecord
    validates :name, :description, :category, :price, :owner_id, :stock, presence: true
    validates :category, inclusion: { 
        in: ["phone cases", "jewelry", "plushies", "bags", "keychains", "gaming accessories"],
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

    # **Will likely need to use the method that converts the number
    #     into a string to the cut the decimal notation down to 2*****
    #
    def avg_rating
        #will return 0 if array length is zero (meaning there are no reviews)
        rating_sum = self.user_reviews.inject(0) {|sum, user_review| sum += (user_review.rating / 5.0) }

        # This is to check if there were no ratings,
        #   and to prevent a ZeroDivisionError if true
        return rating_sum if rating_sum == 0

        # This used to return a percentage relative to 1-5,
        #   the lowest being 0.2 (20%) & highest being 1.0 (100%),
        #   but now it returns a decimal between 1-5 inclusive for the react
        #   star package
        (rating_sum / self.user_reviews.length) * 5.0
    end
end