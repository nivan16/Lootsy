class User < ApplicationRecord
    validates :email, :name, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true

    validates :password, length: {minimum: 6, allow_nil: true}

    before_validation :ensure_session_token

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
    
    has_many :products,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Product


end
