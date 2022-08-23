
json.product do 
    json.id cart_product.product.id
    json.owner_id cart_product.product.owner_id
    json.name cart_product.product.name
    json.category cart_product.product.category
    json.description cart_product.product.description
    json.price cart_product.product.price_string
end

json.user do 
    json.id cart_product.product.owner.id
    json.name cart_product.product.owner.name
    json.email cart_product.product.owner.email
end

json.cart_item do
    json.product_id cart_product.product_id
    json.product_owner_id cart_product.product.owner.id
    json.quantity cart_product.quantity
end