class DropProductTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :products

    create_table :products do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.float :price, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
#  t.string "name", null: false
#     t.text "description", null: false
#     t.float "price", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.integer "user_id", null: false
#     t.string "category"