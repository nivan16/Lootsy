json.extract! user, :id, :email, :name
json.cart do 
    user.cart_products.each do |cart_product|
        json.partial! "/api/cart_items/cart_item", cart_product: cart_product
    end
end