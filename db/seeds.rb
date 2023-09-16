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
u6 = User.create!(email: 'merc@talon.com', name: 'Commander Jabsco', password:'caps4days')
u7 = User.create!(email: 'link@hyrule.com', name: 'Link', password: 'princessmipha')
u8 = User.create!(email: 'justpeachy@shroomdom.com', name: 'Peach', password: 'bffdaisy')
u9 = User.create!(email: 'wandmaker@ollivanders.com', name: 'Ollivander', password: 'diagonalley')

u_lorem1 = User.create!(email: 'lorem1@epsum.com', name: 'lorey', password: 'password')
u_lorem2 = User.create!(email: 'lorem2@epsum.com', name: 'epsil', password: 'password')
u_lorem3 = User.create!(email: 'lorem3@epsum.com', name: 'tinker', password: 'password')
u_lorem4 = User.create!(email: 'lorem4@epsum.com', name: 'gavin', password: 'password')
u_lorem5 = User.create!(email: 'lorem5@epsum.com', name: 'patter', password: 'password')
u_lorem6 = User.create!(email: 'lorem6@epsum.com', name: 'senku', password: 'password')
u_lorem7 = User.create!(email: 'lorem7@epsum.com', name: 'harmon', password: 'password')
u_lorem8 = User.create!(email: 'lorem8@epsum.com', name: 'jonathan', password: 'password')
u_lorem9 = User.create!(email: 'lorem9@epsum.com', name: 'star', password: 'password')


# product = Product.create!(name: , description: , category: '', price: , owner_id: )
stand_arrow = Product.create!(name: 'Arrow', description: 'A random arrow I found in Egypt', category: 'art and collectables', price: 149.99, owner_id: u2.id, stock: 3)
dios_diary = Product.create!(name: 'Old diary', description: 'Completely non-sensical diary, but it could lead to treasure', category: 'miscellaneous', price: 14.00, owner_id: u2.id, stock: 1)
vampire_mask = Product.create!(name: 'Weird mask', description: 'A mask carbon dated to be several thousand years old I got in a cave', category: 'art and collectables', price: 30000.00, owner_id: u2.id, stock: 5)
master_sword = Product.create!(name: 'Blue sword', description: 'A sword I pulled out of a rock, that has a strange triangle pattern on the hilt and a large handguard.', category: 'weapons', price: 127, owner_id: u3.id, stock: 1)
ocarina_of_time = Product.create!(name: 'Ocarina', description: 'An ocarina found at the moat of a castle, still works though!', category: 'art and collectables', price: 25.00, owner_id: u3.id, stock: 1)
pokeball = Product.create!(name: 'Strong pouches', description: "I found these in a field of tall grass, they're made out of a really tough material.", category: 'jewelry and accessories', price: 100.00, owner_id: u4.id, stock: 19)
rengoku = Product.create!(name: 'Beautiful restored blade', description: "Looted (the pieces of) this blade in a forest, but the material is very sturdy and I've never seen metal like this before.", category: 'weapons', price: 20000.00, owner_id: u4.id, stock: 1)
elder_wand = Product.create!(name: 'Old powerful wand', description: 'This wand seems hold an amazing amount of power, but as a merchant it seems too dangerous to use or hold on to. It seems that it can heavily elevate the magic spells available to its caster!', category: 'weapons', price: 3000.00, owner_id: u9.id, stock: 1)
#create a new user for demon slayer items!

#if quantity changes to 0 (is removed from cart, then it would just be the destroy method!!)
cart_item1 = CartItem.create!(shopper_id: u1.id, product_id: stand_arrow.id, quantity: 1)
cart_item2 = CartItem.create!(shopper_id: u1.id, product_id: master_sword.id, quantity: 3)
cart_item3 = CartItem.create!(shopper_id: u1.id, product_id: pokeball.id, quantity: 1)
cart_item4 = CartItem.create!(shopper_id: u2.id, product_id: rengoku.id, quantity: 1)

review1 = Review.create!(product_id: stand_arrow.id, reviewer_id: u5.id, rating: 4, review: "This is an awesome collectable, but I feel sick after i nicked my skin with it")

review2 = Review.create!(product_id: pokeball.id, reviewer_id: u5.id, rating: 5, review: nil)

review3 = Review.create!(product_id: master_sword.id, reviewer_id: u1.id, rating: 2, review: nil)
review4 = Review.create!(product_id: master_sword.id, reviewer_id: u2.id, rating: 5, review: 'The pure light of this blade leaves my body unaffected, and works well against Hamon!')
review5 = Review.create!(product_id: master_sword.id, reviewer_id: u3.id, rating: 3, review: nil)
review6 = Review.create!(product_id: master_sword.id, reviewer_id: u4.id, rating: 4, review: 'I originally bought this as a decoration piece, but I cannot stop looking into how it glows. Is it connected to the light of Solgaleo somehow?')
review7 = Review.create!(product_id: master_sword.id, reviewer_id: u5.id, rating: 1, review: nil)
review8 = Review.create!(product_id: master_sword.id, reviewer_id: u6.id, rating: 3, review: 'For the most part I prefer my missile launcher, but this thing is way better as a sidearm than my knife')
review9 = Review.create!(product_id: master_sword.id, reviewer_id: u7.id, rating: 5, review: 'I love this sword but buyer beware, its already broken twice on me')
review10 = Review.create!(product_id: master_sword.id, reviewer_id: u8.id, rating: 1, review: nil)

review11 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem1.id, rating: 1, review: nil)
review12 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem2.id, rating: 1, review: nil)
review13 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem3.id, rating: 1, review: nil)
review14 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem4.id, rating: 1, review: nil)
review15 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem5.id, rating: 1, review: nil)
review16 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem6.id, rating: 1, review: nil)
review17 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem7.id, rating: 1, review: nil)
review18 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem8.id, rating: 1, review: nil)
review19 = Review.create!(product_id: master_sword.id, reviewer_id: u_lorem9.id, rating: 1, review: '
Even so my sun one early morn did shine,
With all triumphant splendour on my brow;
But out, alack, he was but one hour mine,
The region cloud hath mask’d him from me now …

‘Full many a glorious morning have I seen’: Sonnet 33 is, without doubt, one of the more famous of Shakespeare’s Sonnets. It is also one of the most beautiful poems in English.

The extended metaphor whereby ‘sun = Fair Youth’ in this poem is intended to pay homage to the young man’s beauty: he shines as brightly as that heavenly orb. Shakespeare piles on the flattery, though, with extra touches: the sun has a ‘sovereign eye’ and so, by association, has the Fair Youth – ‘sovereign’ suggesting royalty or at least nobility. The words ‘golden’, ‘gilding’, and ‘alchemy’ all reinforce this association with wealth and nobility.')

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



