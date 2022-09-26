# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CartItem.destroy_all
Product.destroy_all
User.destroy_all

u1 = User.create!(email: 'looter@loot.com', name: 'anon', password: 'password')
u2 = User.create!(email: 'bizarre@adventure.com', name: 'Kars', password: 'ultimatelifeform')
u3 = User.create!(email: 'roamingseller@hyrule.com', name: 'Beetle', password: 'madeinheaven')
u4 = User.create!(email: 'doctor@regions.com', name: 'Oak', password: 'ketchup')
u5 = User.create!(email: 'critic@critics.com', name: 'Garf', password: 'foodies')


# product = Product.create!(name: , description: , category: '', price: , owner_id: )
stand_arrow = Product.create!(name: 'Arrow', description: 'A random arrow I found in Egypt', category: 'art and collectables', price: 149.99, owner_id: u2.id, stock: 3)
dios_diary = Product.create!(name: 'Old diary', description: 'Completely non-sensical diary, but it could lead to treasure', category: 'miscellaneous', price: 14.00, owner_id: u2.id, stock: 1)
vampire_mask = Product.create!(name: 'Weird mask', description: 'A mask carbon dated to be several thousand years old I got in a cave', category: 'art and collectables', price: 30000.00, owner_id: u2.id, stock: 5)
master_sword = Product.create!(name: 'Blue sword', description: 'A sword I pulled out of a rock, that has a strange triangle pattern on the hilt and a large handguard.', category: 'weapons', price: 127, owner_id: u3.id, stock: 1)
ocarina_of_time = Product.create!(name: 'Ocarina', description: 'An ocarina found at the moat of a castle, still works though!', category: 'art and collectables', price: 25.00, owner_id: u3.id, stock: 1)
pokeball = Product.create!(name: 'Strong pouches', description: "I found these in a field of tall grass, they're made out of a really tough material.", category: 'jewelry and accessories', price: 100.00, owner_id: u4.id, stock: 19)
rengoku = Product.create!(name: 'Beautiful restored blade', description: "Looted (the pieces of) this blade in a forest, but the material is very sturdy and I've never seen metal like this before.", category: 'weapons', price: 20000.00, owner_id: u4.id, stock: 1)
#create a new user for demon slayer items!

#if quantity changes to 0 (is removed from cart, then it would just be the destroy method!!)
cart_item1 = CartItem.create!(shopper_id: u1.id, product_id: stand_arrow.id, quantity: 1)
cart_item2 = CartItem.create!(shopper_id: u1.id, product_id: master_sword.id, quantity: 3)
cart_item3 = CartItem.create!(shopper_id: u1.id, product_id: pokeball.id, quantity: 1)
cart_item4 = CartItem.create!(shopper_id: u2.id, product_id: rengoku.id, quantity: 1)

review1 = Review.create!(product_id: stand_arrow.id, reviewer_id: u5.id, rating: 4, review: "This is an awesome collectable, but I feel sick after i nicked my skin with it")
review2 = Review.create!(product_id: pokeball.id, reviewer_id: u5.id, rating: 5, review: nil)
review3 = Review.create!(product_id: master_sword.id, reviewer_id: u5.id, rating: 3, review: "This is an okay item, but I wish it would make me stronger")

# Harry Potter:
#   Elder wand
#   Horcruxes
#   Tom riddle's diary

# Game of Thrones:
#     Daenerys dragon eggs (Found in field, tried to cook them but its fireproof)

# Super Mario:
#     Mushroom
#     Mario Hat
#     Coin Box Sometimes i hit it and it gives me some loose change

# Super Smash Bros
#     Smash Ball: Gives weird powers, regens every few mins

# Legend Of Zelda:
#     Heart Container: Blend into smoothie for revitalizing effects
#     Sheikah Slate
#     ParaGlider

# Naruto:
#     Rogue Headband
#     Akatsuki cloak
#     Minato Kunai
#     Obito Mask

# Avatar:
#     Katara's Necklace (thick Choker)

# Attack on Titan
#     Freedom Jackets

# Sailor Moon
#     Moon Stick

# Card Captor Sakura
#     Dream Staff

# Demon Slayer
#     Kanao Clip
#     Shinobu Clip



