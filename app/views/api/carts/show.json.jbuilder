json.array! @cart do |item|
    debugger
        json.product do
            json.extract! item.product, :id, :owner_id, :name
        end
        json.array! item.quantity
        json.set! item.user.id do
            json.extract! item.user, :id, :email
        end
end
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