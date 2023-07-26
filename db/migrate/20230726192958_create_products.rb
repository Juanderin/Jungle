class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product_name, null: false, index: {unique: true}
      t.text :description, null: false
      t.float :product_price, null: false
      
      t.timestamps
    end
  end
end
