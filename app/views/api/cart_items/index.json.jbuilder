json.product_owners do end
json.products do end
json.cart_items do end


@cart.each do |cart_product|
    json.products do 
        json.set! cart_product.product.id do
            json.id cart_product.product.id
            json.owner_id cart_product.product.owner_id
            json.name cart_product.product.name
            json.product_category cart_product.product.category
            json.product_description cart_product.product.description
            json.product_price cart_product.product.price
        end
    end
    
    json.product_owners do 
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
            json.shopper_id cart_product.shopper_id
            json.product_id cart_product.product_id
            json.quantity cart_product.quantity
        end
    end
    
end

# json.partial! '/api/cart_items/cart_item', cart_product: cart_product

# json.products do
#     @cart.each do |cart_info|
#         json.set! cart_info.product.id do
#             json.partial! '/api/products/product', product: cart_info.product
#         end
        
#         ruby_product_owners[cart_info.product.owner.id] = json.partial! '/api/users/user', user: cart_info.product.owner
#         ruby_cart[cart_info.product.id] = cart_info.quantity
#     end
# end
# json.users do 
#     json.merge! ruby_product_owners
# end
# json.cart do
#     json.merge! ruby_cart
# end





# ruby_product_owners = {}

# json.cart do
#     json.products do
#         @cart.each do |product|
#             json.set! product.id do
#                 json.partial! '/api/products/product', product: product
#             end
            
#             ruby_product_owners[product.owner.id] = product.owner
#         end
#     end
#     json.users do 
#         json.merge! ruby_product_owners
#     end
# end

#add owner name to products, and quantity of each product


#this is NOT done but is pretty close!!!!!
# just need to return the proper info now!!!!




# cart: {
#     cartId: 87,
#     user_id: 36,
#     67: {
#         product_id: 67,
#         quantity: 2
#     }
# }
# products: {
#     @products.each do |product|
#         json.set! product.id do
#             json.partial! '/api/products/product', product: product
#         end
#     end
# }