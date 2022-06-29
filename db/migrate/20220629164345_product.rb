class Product < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :user_id, :integer, null: false
  end
end
