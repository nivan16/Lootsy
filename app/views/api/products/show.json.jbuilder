json.product do 
    json.set! @product.id do
        json.extract! @product, :id, :name, :category, :description, :owner_id, :stock
        json.price @product.price_string
    end
end
json.owner do 
    json.set! @product.owner.id do
        json.extract! @product.owner, :id, :email, :name
    end
end