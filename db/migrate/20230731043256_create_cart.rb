class CreateCart < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.references :product, foreign_key: {to_table: :products}, index: true, null: false
      t.references :user, foreign_key: {to_table: :users}, index: true, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
    
    add_index :carts, [:user_id, :product_id], unique: true
    
  end
end
