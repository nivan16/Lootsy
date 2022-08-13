class RenamingCartAndProductForeignKeyFixed < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :owner_id
    remove_column :products, :user_id

    add_column :products, :owner_id, :integer, null: false
    add_column :carts, :user_id, :integer, null: false

    add_index :products, :owner_id
    add_index :carts, :user_id
  end
end
