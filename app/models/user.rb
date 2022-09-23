class User < ApplicationRecord
    validates :email, :name, :password_digest, :session_token, presence: true
    validates :email, uniqueness: { case_sensitive: false }
    validates :session_token, uniqueness: true
    
    validates :password, length: { minimum: 6, allow_nil: true }
    
    before_validation :ensure_session_token
    before_validation :ensure_lowercase_and_strip_whitespace, only: [:email, :name]
    
    #this refers to items being sold
    has_many :products,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Product,
        dependent: :destroy

    has_many :cart_products,
        primary_key: :id,
        foreign_key: :shopper_id,
        class_name: :CartItem,
        dependent: :destroy

    #Note: The source :product refers to belongs_to association in Cart model!
    has_many :cart_items, through: :cart_products, 
        source: :product,
        dependent: :destroy

    #Review table association
    has_many :product_reviews,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: :Review,
        dependent: :destroy


    def password
        @password
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(self.password_digest)
        pass_obj.is_password?(password) #pass_obj.is_password?(pass) method is a BCyrpt method
    end


    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)

        if @user && @user.is_password?(password)
            @user
        elsif @user #if only the email is accurate
            false
        else
            nil
        end
    end

    def generate_session_token
        SecureRandom::urlsafe_base64 #implicit return
    end
    
    def ensure_session_token
        self.session_token ||= self.generate_session_token
        #does this also need a 'self.save!' ?
    end

    def reset_session_token!
        self.session_token = self.generate_session_token
        self.save!
        self.session_token
    end
    
    def ensure_lowercase_and_strip_whitespace
        # Accidentally did strip! at first,
        # which caused validation fail (because of immediate execution)

        self.name = self.name.strip unless self.name.nil?
        self.email = self.email.strip.downcase unless self.email.nil?
    end

end
