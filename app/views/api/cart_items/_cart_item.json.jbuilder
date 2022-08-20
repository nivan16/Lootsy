
json.product do 
    json.id cart_product.product.id
    json.owner_id cart_product.product.owner_id
    json.name cart_product.product.name
    json.category cart_product.product.category
    json.description cart_product.product.description
    json.price cart_product.product.price
end

json.user do 
    json.id cart_product.product.owner.id
    json.name cart_product.product.owner.name
    json.email cart_product.product.owner.email
end

json.cart_item do
    json.shopper_id cart_product.shopper_id
    json.product_id cart_product.product_id
    json.quantity cart_product.quantity
end