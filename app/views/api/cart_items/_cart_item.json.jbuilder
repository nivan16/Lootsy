#the key is product id, not cart_item id, because it 
# makes it easier to update the quantity (ex: the show page)
# and the shopper is always available (as the current user)
json.set! cart_item.product.id do
    json.product_id cart_item.product.id
    json.product_name cart_item.product.name
    json.category cart_item.product.category
    json.description cart_item.product.description
    json.price cart_item.product.price_string
    
    json.owner_id cart_item.product.owner.id
    json.owner_name cart_item.product.owner.name
    json.owner_email cart_item.product.owner.email

    json.cart_item_id cart_item.id
    json.stock cart_item.product.stock
    json.quantity cart_item.quantity
end

### ***Prior to Cart State independence

# json.product do 
#     json.id cart_item.product.id
#     json.owner_id cart_item.product.owner_id
#     json.name cart_item.product.name
#     json.category cart_item.product.category
#     json.description cart_item.product.description
#     json.price cart_item.product.price_string
#     json.stock cart_item.product.stock
# end

# json.user do 
#     json.id cart_item.product.owner.id
#     json.name cart_item.product.owner.name
#     json.email cart_item.product.owner.email
# end

# json.cart_item do
#     json.product_id cart_item.product_id
#     json.product_owner_id cart_item.product.owner.id
#     json.quantity cart_item.quantity
# end