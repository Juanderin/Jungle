@cart.each do |product|
        json.set! product.id do
            json.partial! 'cart', cart: item
    end 
end 