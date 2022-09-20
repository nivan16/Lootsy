json.products do end
json.owners do end

@products.each do |product|
    json.products do 
        json.set! product.id do
            json.extract! product, :id, :name, :category, :description, :owner_id, :stock
            json.price product.price_string
        end
    end

    json.owners do 
        json.set! product.owner.id do
            json.extract! product.owner, :id, :email, :name
        end
    end
end