@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :session_token, :email, :name
    end
end