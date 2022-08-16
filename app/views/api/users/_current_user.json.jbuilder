json.user_info do
    json.extract! user, :id, :email, :name
end

# there is only a cart object if the user.cart_products association 
# doesn't return [] (which means there are no cart_products for a User instance)
# because ruby will just not run the .each on the empty array!!

# **Note: json.cart(ele) is syntax for json.array! with a name
json.cart(user.cart_products) do |cart_product|
    json.partial! partial: "/api/cart_items/cart_item.json.jbuilder", cart_product: cart_product
end
