ruby_product_owners = {}

json.cart do
    json.products do
        @cart.each do |product|
            json.set! product.id do
                json.partial! '/api/products/product', product: product
            end
            
            ruby_product_owners[product.owner.id] = product.owner
        end
    end
    json.users do 
        json.merge! ruby_product_owners
    end
end

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