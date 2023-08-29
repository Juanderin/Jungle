class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :body
      t.float :rating, null: false
      t.references :user, foreign_key: {to_table: :users}, index: true, null: false
      t.references :product, foreign_key: {to_table: :products}, index: true, null: false

      t.timestamps
    end
  end
end
