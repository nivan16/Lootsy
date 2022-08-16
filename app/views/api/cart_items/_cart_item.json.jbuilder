json.cart_item do
    json.shopper_id cart_product.shopper_id
    json.product_id cart_product.product_id
    json.quantity cart_product.quantity
end

json.product do 
    json.id cart_product.product.id
    json.owner_id cart_product.product.owner_id
    json.name cart_product.product.name
    json.product_category cart_product.product.category
    json.product_description cart_product.product.description
    json.product_price cart_product.product.price
end

json.product_owner do 
    json.id cart_product.product.owner.id
    json.name cart_product.product.owner.name
    json.email cart_product.product.owner.email
end
