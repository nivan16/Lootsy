class RemoveExtraTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :table_cart_items
  end
end
