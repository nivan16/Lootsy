# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_03_04_170908) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_items", force: :cascade do |t|
    t.integer "shopper_id", null: false
    t.integer "product_id", null: false
    t.integer "quantity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_cart_items_on_product_id"
    t.index ["shopper_id"], name: "index_cart_items_on_shopper_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name", null: false
    t.string "category", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "owner_id", null: false
    t.decimal "price", precision: 10, scale: 2, null: false
    t.integer "stock", null: false
    t.string "image"
    t.index ["owner_id"], name: "index_products_on_owner_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "product_id", null: false
    t.integer "reviewer_id", null: false
    t.integer "rating", null: false
    t.text "review"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id", "reviewer_id"], name: "index_reviews_on_product_id_and_reviewer_id", unique: true
    t.index ["product_id"], name: "index_reviews_on_product_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "table_cart_items", force: :cascade do |t|
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
