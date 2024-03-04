# *************** IMPORTANT NOTE *************** #
# If the current user has no cart, then jBuilder will
# will send only the user_info object, with no other
# objects. 

json.user_info do
    json.extract! user, :id, :email, :name
end

# ********************************************** #

# ********** In the future: ***********
# Something to consider is the possibility 
# that a user might own/sell products as well.
#  
# This would be a change reflected in the users
# reducer (owner of products) & the product reducer
# *************************************



json.cart_items do end

user.cart_products.each do |cart_item|
    json.cart_items do 
        #the key is product id, not cart_item id, because it 
        # makes it easier to update the quantity (ex: the show page)
        # and the shopper is always available (as the current user)
        json.set! cart_item.product.id do
            json.product_id cart_item.product.id
            json.product_name cart_item.product.name
            json.category cart_item.product.category
            json.image cart_item.product.image
            json.description cart_item.product.description
            json.price cart_item.product.price_string
            
            json.owner_id cart_item.product.owner.id
            json.owner_name cart_item.product.owner.name
            json.owner_email cart_item.product.owner.email

            json.cart_item_id cart_item.id
            json.stock cart_item.product.stock
            json.quantity cart_item.quantity
        end
    end
end



# ***Prior to independent Cart Slice of State

# json.users do end
# json.products do end
# json.cart_items do end
# # there is only a cart object if the user.cart_products association 
# # doesn't return [] (which means there are no cart_products for a User instance)
# # because ruby will just not run the .each on the empty array!!

# # **Note: json.cart(ele) is syntax for json.array! with a name

# user.cart_products.each do |cart_product|
#     json.products do 
#         json.set! cart_product.product.id do
#             json.id cart_product.product.id
#             json.owner_id cart_product.product.owner_id
#             json.name cart_product.product.name
#             json.category cart_product.product.category
#             json.description cart_product.product.description
#             json.price cart_product.product.price_string
#             json.stock cart_product.product.stock
#         end
#     end
    
#     json.users do 
#         json.set! cart_product.product.owner.id do 
#             json.id cart_product.product.owner.id
#             json.name cart_product.product.owner.name
#             json.email cart_product.product.owner.email
#         end
#     end
    
#     json.cart_items do
#         #the key is product id, not cart_item id, because it 
#         # makes it easier to update the quantity (ex: the show page)
#         # and the shopper is always available (as the current user)
#         json.set! cart_product.product.id do 
#             json.product_owner_id cart_product.product.owner.id
#             json.product_id cart_product.product_id
#             json.quantity cart_product.quantity
#         end
#     end
    
# end