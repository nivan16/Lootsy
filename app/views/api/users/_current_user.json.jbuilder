json.user_info do
    json.extract! user, :id, :email, :name
end

json.users do end
json.products do end
json.cart_items do end
# there is only a cart object if the user.cart_products association 
# doesn't return [] (which means there are no cart_products for a User instance)
# because ruby will just not run the .each on the empty array!!

# **Note: json.cart(ele) is syntax for json.array! with a name

user.cart_products.each do |cart_product|
    json.products do 
        json.set! cart_product.product.id do
            json.id cart_product.product.id
            json.owner_id cart_product.product.owner_id
            json.name cart_product.product.name
            json.category cart_product.product.category
            json.description cart_product.product.description
            json.price cart_product.product.price
        end
    end
    
    json.users do 
        json.set! cart_product.product.owner.id do 
            json.id cart_product.product.owner.id
            json.name cart_product.product.owner.name
            json.email cart_product.product.owner.email
        end
    end
    
    json.cart_items do
        #the key is product id, not cart_item id, because it 
        # makes it easier to update the quantity (ex: the show page)
        # and the shopper is always available (as the current user)
        json.set! cart_product.product.id do 
            json.product_owner_id cart_product.product.owner.id
            json.product_id cart_product.product_id
            json.quantity cart_product.quantity
        end
    end
    
end