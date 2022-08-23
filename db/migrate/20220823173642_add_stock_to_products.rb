class AddStockToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :stock, :integer, null: false
  end
end
