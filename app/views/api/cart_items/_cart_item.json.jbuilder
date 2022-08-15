json.set! cart_product.product_id do 
    json.product_id cart_product.product.id
    json.product_name cart_product.product.name
    json.product_category cart_product.product.category
    json.product_description cart_product.product.description
    json.product_price cart_product.product.price
    json.quantity cart_product.quantity
    json.product_owner do 
        json.id cart_product.product.owner.id
        json.name cart_product.product.owner.name
        json.email cart_product.product.owner.email
    end
end