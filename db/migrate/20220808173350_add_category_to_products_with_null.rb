class AddCategoryToProductsWithNull < ActiveRecord::Migration[5.2]
  def change
    remove_column(:products, :category, :string)
    add_column(:products, :category, :string)
  end
end
