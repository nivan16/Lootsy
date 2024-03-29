json.cart_items do end

@cart.each do |cart_item|
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

### **Prior to independent Cart State
# json.users do end
# json.products do end
# json.cart_items do end


# @cart.each do |cart_product|
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
### Prior to independent Cart State**


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