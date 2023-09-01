class Cart < ApplicationRecord

    belongs_to :product
    belongs_to :user
  
    validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
    validates :product, uniqueness: { scope: :user, message: "has already been added to the cart" }
  
    
end 