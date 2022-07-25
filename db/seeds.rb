# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Product.destroy_all

u1 = User.create!(email: 'looter@loot.com', name: 'anon', password: 'password')
u2 = User.create!(email: 'bizarre@adventure.com', name: 'Kars', password: 'ultimatelifeform')
u3 = User.create!(email: 'roamingseller@hyrule.com', name: 'Beetle', password: 'madeinheaven')
u4 = User.create!(email: 'doctor@regions.com', name: 'Oak', password: 'ketchup')


# p# = Product.create!(name: , description: , price: , user_id: )
stand_arrow = Product.create!(name: 'Arrow', description: 'A random arrow I found in Egypt', price: 130.00, user_id: u2.id)
dios_diary = Product.create!(name: 'Old diary', description: 'Completely non-sensical diary, but it could lead to treasure', price: 14.00, user_id: u2.id)
vampire_mask = Product.create!(name: 'Weird mask', description: 'A mask carbon dated to be several thousand years old I got in a cave', price: 30000.00, user_id: u2.id)
master_sword = Product.create!(name: 'Blue sword', description: 'A sword I pulled out of a rock, that has a strange triangle pattern on the hilt and a large handguard.', price: 127, user_id: u3.id)
ocarina_of_time = Product.create!(name: 'Ocarina', description: 'An ocarina found at the moat of a castle, still works though!', price: 25.00, user_id: u3.id)
pokeball = Product.create!(name: 'Strong pouches', description: "I found these in a field of tall grass, they're made out of a really tough material.", price: 100.00, user_id: u4.id)
rengoku = Product.create!(name: 'Beautiful restored blade', description: "Looted (the pieces of) this blade in a forest, but the material is very sturdy and I've never seen metal like this before.", price: 20000.00, user_id: u4.id)
#create a new user for demon slayer items!

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



