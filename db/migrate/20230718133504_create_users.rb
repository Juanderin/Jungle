class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, index: {unique: true}, null: false
      t.string :email, index: {unique: true}, null: false
      t.string :session_token, null: false, index: {unique: true}
      t.string :password_digest, null: false 

      t.timestamps
    end
  end
end
