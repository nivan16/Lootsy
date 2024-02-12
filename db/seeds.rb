# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
CartItem.destroy_all
Product.destroy_all
User.destroy_all

u1 = User.create!(email: 'looter@loot.com', name: 'hiroyuki', password: 'password')
u2 = User.create!(email: 'bizarre@adventure.com', name: 'yoshimitsu', password: 'ultimatelifeform')
u3 = User.create!(email: 'roamingseller@hyrule.com', name: 'pochiko', password: 'madeinheaven')
u4 = User.create!(email: 'doctor@regions.com', name: 'dango', password: 'ketchup')
u5 = User.create!(email: 'critic@critics.com', name: 'mochi', password: 'foodies')
u6 = User.create!(email: 'merc@talon.com', name: 'saka', password:'caps4days')
u7 = User.create!(email: 'link@hyrule.com', name: 'kitkat', password: 'princessmipha')
u8 = User.create!(email: 'justpeachy@shroomdom.com', name: 'peachy', password: 'bffdaisy')
u9 = User.create!(email: 'wandmaker@ollivanders.com', name: 'doodle', password: 'diagonalley')

u_lorem_phone_case1 = User.create!(email: 'case1@epsum.com', name: 'cinnamoroll_jellybean', password: 'password')
u_lorem_phone_case2 = User.create!(email: 'case2@epsum.com', name: 'empathy.calm', password: 'password')
u_lorem_phone_case3 = User.create!(email: 'case3@epsum.com', name: 'bear-blush', password: 'password')
u_lorem_phone_case4 = User.create!(email: 'case4@epsum.com', name: 'bubble.chiffchaff', password: 'password')
u_lorem_phone_case5 = User.create!(email: 'case5@epsum.com', name: 'kittytoot', password: 'password')

u_lorem_jewelry1 = User.create!(email: 'jewelry1@epsum.com', name: 'strawberrymilk', password: 'password')
u_lorem_jewelry2 = User.create!(email: 'jewelry2@epsum.com', name: 'glitter.sweets', password: 'password')
u_lorem_jewelry3 = User.create!(email: 'jewelry3@epsum.com', name: 'blackcat_doodlee', password: 'password')
u_lorem_jewelry4 = User.create!(email: 'jewelry4@epsum.com', name: 'panpangarden', password: 'password')
u_lorem_jewelry5 = User.create!(email: 'jewelry5@epsum.com', name: 'lily_pipsqueek ', password: 'password')

u_lorem_plushies1 = User.create!(email: 'plushies1@epsum.com', name: 'strawberry.blossom', password: 'password')
u_lorem_plushies2 = User.create!(email: 'plushies2@epsum.com', name: 'buffvivacious', password: 'password')
u_lorem_plushies3 = User.create!(email: 'plushies3@epsum.com', name: 'chonkywubblybuns', password: 'password')
u_lorem_plushies4 = User.create!(email: 'plushies4@epsum.com', name: 'dew_snake', password: 'password')
# u_lorem_plushies5 = User.create!(email: 'plushies5@epsum.com', name: '', password: 'password')

u_lorem_bags1 = User.create!(email: 'bags1@epsum.com', name: 'tiddlywinksmushroom', password: 'password')
u_lorem_bags2 = User.create!(email: 'bags2@epsum.com', name: 'puppy__sakura ', password: 'password')
u_lorem_bags3 = User.create!(email: 'bags3@epsum.com', name: 'berry0merry', password: 'password')
u_lorem_bags4 = User.create!(email: 'bags4@epsum.com', name: 'potion.meep', password: 'password')
u_lorem_bags5 = User.create!(email: 'bags5@epsum.com', name: 'pinkykittypancake', password: 'password')

u_lorem_keychains1 = User.create!(email: 'keychains1@epsum.com', name: 'muscletiddlywinks', password: 'password')
u_lorem_keychains2 = User.create!(email: 'keychains2@epsum.com', name: 'shortcakeflowercow', password: 'password')
u_lorem_keychains3 = User.create!(email: 'keychains3@epsum.com', name: 'kawaiisu.swirlcake', password: 'password')
u_lorem_keychains4 = User.create!(email: 'keychains4@epsum.com', name: 'lilkitsgameboy', password: 'password')
u_lorem_keychains5 = User.create!(email: 'keychains5@epsum.com', name: 'cherrydobby', password: 'password')

u_lorem_gaming1 = User.create!(email: 'gaming1@epsum.com', name: 'cutie_keeb_pro', password: 'password')
u_lorem_gaming2 = User.create!(email: 'gaming2@epsum.com', name: 'kirbybrumby', password: 'password')
u_lorem_gaming3 = User.create!(email: 'gaming3@epsum.com', name: 'cozy.sparkle', password: 'password')
u_lorem_gaming4 = User.create!(email: 'gaming4@epsum.com', name: 'tipsycakes_ichigo', password: 'password')
u_lorem_gaming5 = User.create!(email: 'gaming5@epsum.com', name: 'blossom.bunnie', password: 'password')

# product = Product.create!(name: , description: , category: '', price: , owner_id: )
# stand_arrow = Product.create!(name: 'Arrow', description: 'A random arrow I found in Egypt', category: 'art and collectables', price: 149.99, owner_id: u2.id, stock: 3)
# dios_diary = Product.create!(name: 'Old diary', description: 'Completely non-sensical diary, but it could lead to treasure', category: 'miscellaneous', price: 14.00, owner_id: u2.id, stock: 1)
# vampire_mask = Product.create!(name: 'Weird mask', description: 'A mask carbon dated to be several thousand years old I got in a cave', category: 'alocalles', price: 30000.00, owner_id: u2.id, stock: 5)
# master_sword = Product.create!(name: 'Blue sword', description: 'A sword I pulled out of a rock, that has a strange triangle pattern on the hilt and a large handguard.', category: 'weapons', price: 127, owner_id: u3.id, stock: 1)
# ocarina_of_time = Product.create!(name: 'Ocarina', description: 'An ocarina found at the moat of a castle, still works though!', category: 'art and collectables', price: 25.00, owner_id: u3.id, stock: 1)
# pokeball = Product.create!(name: 'Strong pouches', description: "I found these in a field of tall grass, they're made out of a really tough material.", category: 'jewelry and accessories', price: 100.00, owner_id: u4.id, stock: 19)
# rengoku = Product.create!(name: 'Beautiful restored blade', description: "Looted (the pieces of) this blade in a forest, but the material is very sturdy and I've never seen metal like this before.", category: 'weapons', price: 20000.00, owner_id: u4.id, stock: 1)
# elder_wand = Product.create!(name: 'Old powerful wand', description: 'This wand seems hold an amazing amount of power, but as a merchant it seems too dangerous to use or hold on to. It seems that it can heavily elevate the magic spells available to its caster!', category: 'weapons', price: 3000.00, owner_id: u9.id, stock: 1)


# Category of Phone Cases
pink_cinna_case = Product.create!(
    name: "Pink Cinnamoroll Phone Case",
    description: "This phone case mixes Baroque elements with classic retro vibes for the most sickeningly cute phone case you've ever seen! Perfect for art lovers and Sanrio fans.

        With your purchase, we will also give you a free mobile phone chain!
        
        ❀ Made of high-quality Silicone TPU Material.
        ❀ Excellent protection for your phone.
        ❀ Easy to install and remove.
        
        The phone case is flexible and durable, dirt-resistant, to protect your mobile phone against any drops or bumps.",
    category: 'phone cases', 
    price: 14.99,
    owner_id: u_lorem_phone_case1.id,
    stock: 4
)

japanese_street_phone_cases = Product.create!(
    name: "Japanese Street Landscape Pink and Green Phone Case Set",
    description: "Introducing our enchanting Japanese Street Landscape Phone Case in delightful shades of pink and green! This exquisite accessory encapsulates the captivating beauty of Japan's bustling streets, bringing a touch of serenity and elegance to your smartphone.

        Immerse yourself in the picturesque scenery of cherry blossom trees, traditional lanterns, and vibrant storefronts, creating a harmonious blend of urban energy and natural tranquility. Crafted with precision and care, this durable case offers optimal protection against everyday bumps and scratches while maintaining a slim and lightweight design.
        
        The pink and green colour scheme adds a fresh and playful touch, perfectly complementing your personal style. Elevate your phone's aesthetic with our Japanese Street Landscape Phone Case and embark on a journey through the vibrant streets of Japan wherever you go.",
    category: 'phone cases',
    price: 24.99,
    owner_id: u_lorem_phone_case2.id,
    stock: 26
)

cartoon_bear_case = Product.create!(
    name: "Cute Cartoon Bear Phone Case",
    description: 'OUR FEATURES:

        🌸 Shockproof, anti-fall prevention.
        
        🌸 Soft silicone phone case.
        
        🌸 Easy to install or remove.
        
        🌸 Precise hole position, seamless fit.
        
        🌸 Made to order.
        
        NOTES:
        
        🌸 This is ONLY a phone case - PHONE IS NOT INCLUDED.
        
        🌸 Colours may differ slightly from product photos due to lighting.
        
        Thank you so much for purchasing from us!!!',
    category: 'phone cases',
    price: 19.99,
    owner_id: u_lorem_phone_case3.id,
    stock: 7
)

three_d_bear_case = Product.create!(
    name: '3D Bear Phone Case with Detachable Phone Chain ',
    description: 'Please take note of the following before placing an order:
        1. They might be slight difference from photo descriptions to actual appearance of items due to lightning, but rest assured that the photo descriptions/displays match the item.
        2. Delays are inevitable sometimes. Items will be shipped within 1-3 days. Once we shipped the item, we make sure that we are coordinating with the courier to ensure the safeness of the item upon transit. In case you prefer to rush orders, we will request you to pay for extra shipping fee.
        
        All of our products are custom-made with love and care in our workshop. We hope you will enjoy them!',
    category: 'phone cases',
    price: 22.99,
    owner_id: u_lorem_phone_case4.id,
    stock: 2
)

cat_case_with_wristband = Product.create!(
    name: 'Kawaii Kitty Phonecase with Plush Wristband',
    description: 'Our adorable kitty phonecase coupled with our detachable plush wristband means that you not only have a stylish way to upgrade your phone, but your outfit too! Attach the wristband to easily turn what looks like just an uber cute phonecase into a statement handbag that you can carry with you wherever you go!

        – Made from premium quality soft silicone.
        – Possesses soft button covers that protect from dust and/or dirt.
        – Precision cut ports provide easy access.',
    category: 'phone cases',
    price: 21.49,
    owner_id: u_lorem_phone_case5.id,
    stock: 25
)


# Category of Jewelry
strawberry_earrings = Product.create!(
    name: 'Strawberry Earrings',
    description: 'About the earrings:
        - All of our earrings are handmade with love and dedication, making each pair one of a kind.
        - Please note that due to the handmade nature of our products, variations in shape and pattern may occur.
        - Our earrings are waterproof and feature 925 silver ear hooks.
        - Colors may appear slightly different on screen due to differences in resolution, brightness, and contrast.
        
        Shipping:
        - We have set a standard shipping time, but please note that unexpected delays may occur.
        - If you need your earrings sooner, we offer expedited shipping for an additional cost. 
        
        As a thank you for your support, we will provide you with a coupon for your next purchase. ❤',
    category: 'jewelry',
    price:  17.99,
    owner_id: u_lorem_jewelry1.id,
    stock: 14
)

macaron_earrings = Product.create!(
    name: 'Kawaii Mix n Match Macaron Earrings',
    description: 'Super cute kawaii pack of 6 macarons earrings made out of polymer clay with steel earring hooks.

        The pack includes:
        - 1 purple macaron
        - 1 blue macaron
        - 1 green macaron
        - 1 yellow macaron
        - 1 orange macaron
        - 1 pink macaron
        
        You can combine them as you want! Everyday you can have a different pair of earrings!
        
        Each macaron measures around 1cm. The size may vary between each piece.
        
        *Each are also unique and were carefully made by hand, so, the item you receive could be look a little bit different from the photos.*',
    category: 'jewelry',
    price: 27.99,
    owner_id: u_lorem_jewelry2.id,
    stock: 14
)

cat_in_plant_earrings = Product.create!(
    name: 'Black Cat and Plant Huggie Earrings',
    description: "Embrace whimsy and nature's beauty with our adorable cat and plant earrings. These earrings merge feline charm and botanical 
        elegance in a captivating design. Mini cat and plant charms are intricately detailed, celebrating the bond between pets and plants. 
        The huggie style offers a secure fit, ensuring comfort throughout the day. A delightful choice for cat lovers and nature enthusiasts, these earrings 
        add a playful yet sophisticated touch to your ensemble. Whether you're heading to a casual outing or a garden party, these earrings celebrate 
        both companionship and flora, allowing you to express your style with a touch of charm and originality.",
    category: 'jewelry',
    price: 16.99,
    owner_id: u_lorem_jewelry3.id,
    stock: 9
)

bread_cat_earrings = Product.create!(
    name: 'Bread Cat Earrings',
    description: "(MADE TO ORDER) Handmade mini bread cat earrings, made from polymer clay and glazed by hand. Earring hooks are 925 sterling silver, with rubber backings. These earrings are 
        HANDMADE with love and care, so please expect some small variations here and there. It's what makes each loaf kitty unique(: Please allow 1-2 weeks of processing and shipping time since these earrings are made to order!

        DETAILS:
        ☆ Polymer clay charms with glossy finish.
        ☆ Size: ~0.6 in x 0.5 in clay charm (they are a little more than 1/2 inch long); drop length from earlobe piercing is ~ 1.3 in
        ☆ Earring hooks are 925 sterling silver.
        ☆ For the longevity of your earrings, please do not shower while wearing them or expose them to water for long periods of time.",
    category: 'jewelry',
    price:  9.99,
    owner_id: u_lorem_jewelry4.id,
    stock: 11
)

lily_of_valley_earrings = Product.create!(
    name: 'Lily of the Valley Jewelry Set',
    description: 'Adorn this gorgeous jewelry set when you want to look elegant and classy, but still want to stand out and 
        be the belle of the ball. This set is handmade. The necklace is made with high-quality glass beads, 
        featuring a lobster claw closure style as well as being adjustable in length. Custom lengths are available at no extra charge. 
        Earrings are made with the same high-quality glass beads and are of a classic dangle 
        style with a roughly 4cm drop (this length cannot be changed), featuring a fish hook back.',
    category: 'jewelry',
    price: 31.99,
    owner_id: u_lorem_jewelry5.id,
    stock: 5
)



#Category of Plushies
ruby_the_cow = Product.create!(
    name: 'Ruby the Strawberry Cow',
    description: "This is Ruby, the Strawberry Cow. She's handmade, adorable, and has a magnetic/removable strawberry on top of her wittle precious head. Measures approximately 8 inches tall.",
    category: 'plushies',
    price: 31.99,
    owner_id: u_lorem_plushies1.id,
    stock: 4
)

milkshake_the_cow = Product.create!(
    name: 'Milkshake the Strawberry Cow',
    description: "Meet Milkshake, the new and improved Strawberry Cow! This cow is approx. 11.5 inches tall including horns. 
        She's made with medium length faux fur that is super soft, and is a sweet pink color. She has embroidered 
        features, and a minky fabric for her belly and inside of her ears.",
    category: 'plushies',
    price: 32.99,
    owner_id: u_lorem_plushies1.id,
    stock: 8
)

#The above two products should have the same owner_id

buff_hello_kitty = Product.create!(
    name: 'Buff Hello Kitty',
    description: 'A big buff Hello Kitty to protect you from evil. Can also act as a boyfriend replacement.',
    category: 'plushies',
    price: 28.99,
    owner_id: u_lorem_plushies2.id,
    stock: 19
)

chonky_bunny = Product.create!(
    name: 'Chonky Bunny Plushie',
    description: "Meet our chonky bunny plushie – the epitome of cuddly charm! Crafted with love and extra huggability, this adorable plushie is the perfect companion for adding a touch of whimsy to your space.

        ♡ Each chonky plush is handmade.
        ♡ Outer materials: soft polyester fabric | Inner materials: PP cotton stuffing
        ♡ Care information: Hand-wash + air dry only. DO NOT MACHINE WASH - the plushies will become wrinkled and deformed.
        ♡ Measuring approximately 15cm x 25cm - it's the perfect size to cuddle with.
        
        DISCLAIMER: Colors may vary between your screen and the actual product. As all products are handmade, minor flaws and slight differences may still be possible.",
    category: 'plushies',
    price: 42.99,
    owner_id: u_lorem_plushies3.id,
    stock: 11
)

candy_snake_plushie_set = Product.create!(
    name: 'Kawaii Candy Snake Plushie Set',
    description: "Pink/lavender soft minky plush snakes with beautiful embroidered candies! Frosted sprinkles on bellies!
        Perfect gift for a snake lover or kawaii niche lover! The snake can wrap around your arm to keep you company or be a fashion accessory!
        
        Perfect for any plush collector! 💖",
    category: 'plushies',
    price:  45.99,
    owner_id: u_lorem_plushies4.id,
    stock: 2
)




#Category of Bags
mushroom_bag = Product.create!(
    name: 'Crochet Mushroom Crossbody Bag',
    description: "Our lovely, quirky mushroom bags are meticulously handcrafted with love and care.
        Ideal as a unique and thoughtful gift.
        Discover the magic of nature with our whimsical mushroom-shaped bag. Each bag is a work of art, created with precision and attention to detail. 🍄✨
        
        The bottom width of this bag is approximately 4.5 inches, the widest part of the mushroom cap is about 7 inches, the height is around 6 inches, and the strap length is usually about 43 inches. 
        However, as you know, handmade products may have slight variations, but the actual size won't differ too much!",
    category: 'bags',
    price:  22.99,
    owner_id: u_lorem_bags1.id,
    stock: 12
)

floral_bag = Product.create!(
    name: 'Pink and White Embroidered Floral Canvas Bag Set',
    description: 'Dimensions:
        L: 20 cm (8 inches)
        H: 20 cm (8 inches)
        W: 8 cm (3 inches)
        Handle drop: 8 cm (3 inches)
        Adjustable strap: 65-130 cm (25-50 inches)
        Manual measurement, please allow 1-2cm error.
        
        ✿ The bag is canvas and fully lined. Super lightweight but strong.
        ✿ Features a handle drop and also an adjustable shoulder strap.
        ✿ Each bag is handmade, so your bag will feature exquisite and unique craftsmanship.
        ✿ Various embroidered designs: peach blossoms, cherry blossoms, cranes etc.
        ✿ The bag has a small zipped pocket inside. It can fit cell phones, wallets, keys, sunglasses, cosmetics, etc. 
        
        Care instructions: hand wash/wash on delicate at a temperature no higher than 86 ºF (or 30°С)',
    category: 'bags',
    price: 44.99,
    owner_id: u_lorem_bags2.id,
    stock: 21
)

strawberry_crossbody_bag = Product.create!(
    name: 'Strawberry Crossbody Bag',
    description: '♥♥♥ Measurements & Bag Details ♥♥♥

        - Material is faux leather/PU!
        - Bag size exterior is approximately 8.5"H x 6.5"L x 3"W.
        - Window size is approximately 5.75H x 4.5"W.
        - Interior bag size (not including pin insert section) is approximately 8.25"H x 6.25"L x 2.5"W.
        - Able to fit a Nintendo Switch Lite, and a regular Nintendo Switch (with the controllers taken off)!
        - Inside, there is one small zippered pocket, two open accessory pockets, and one slip pocket.
        - Bag lining color matches the main bag color.
        - Each bag comes with one pin insert matching the main bag color.
        - This bag can be worn two ways! Each bag comes with two backpack straps (extends to 45") and one longer crossbody strap (extends to 60").
        
        Note: To increase bag life, make sure not to overstuff the bag and keep out of prolonged exposure to direct sunlight/any extreme weather!',
    category: 'bags',
    price: 34.99,
    owner_id: u_lorem_bags3.id,
    stock: 6
)

cat_potion_bag = Product.create!(
    name: 'Cat Potion Tote Bag',
    description: "❤❤❤❤❤
        Overview:
        Cotton Tote Bag:
        - 17 x 13.4 in (B x H).
        - Inner pocket.
        - Magnetic snap.
        - Single-sided heat press print.
        - Unique canvas color.
        
        Crafted from high-quality teal cotton, this handmade tote bag boasts a chic, snug-fit design with a sleek magnetic snap closure and an inner pocket for essentials. 
        The bag features a row of enchanting Cat Potion prints, adding a touch of whimsy to your everyday style. Using advanced heat transfer technology, the prints remain vibrant, 
        ensuring a long-lasting allure. Whether you're headed to work, school, or a casual outing, this tote bag effortlessly complements your outfit, making it a perfect choice 
        for cat lovers and trendsetters alike. Embrace the magic of our Cat Potion Series and make a statement wherever you go!
        
        *WASHING INSTRUCTION: Handwash recommended, and it is highly recommended to air dry only. You can machine wash in cold water, but fabric discoloration is at your own risk. 
        Additionally, if you plan to iron the bag, flip the pattern to the back or place an extra layer of fabric over the design to protect it from heat damage.*",
    category: 'bags',
    price:  25.99,
    owner_id: u_lorem_bags4.id,
    stock: 14
)

convertible_cat_bag = Product.create!(
    name: 'Strawberry Cat Convertible Bag Set',
    description: 'A cute convertible bag in the shape of a strawberry cat! Can be worn crossbody, over the shoulder, as a mini backpack, or handheld (top handle)!
        Perfect size for your wallet, phone, keys, sunglasses, and other small daily essentials!

        When your bag arrives, check inside for the 3 adjustable straps; they will be wrapped in there!
        
        - Exterior dimensions 9" x 4.5" x 8.5"
        - Interior dimensions: 8"x4"x 6.5" usable space
        - PU/vegan leather exterior that is easy to wipe clean
        - Embroidered design details
        - Comes with 3 straps: 1 adjustable shoulder strap, and 2 adjustable backpack straps
        - 5"x5" interior zipper pocket for small items
        - Gold tone hardware, including heart-shaped zipper pulls on exterior zip, as well as a heart-shaped buckle on the shoulder strap
        - Custom gingham inner lining fabric (pink interior on pink bag, green interior on white bag.)
        - Custom shop logo cloth label
        
        **Care instructions:
        - PU material and hardware can be wiped clean with a damp cloth and mild soap
        - Sometimes PU leather can be mishapened during shipping, especially during the warmer months and longer shipping routes. Regular use/wear will usually fill out and mishapening of the center 
        of the bag; for the free edges (like the ears and bottom of the bag,) the material can be warmed gently with a hair dryer or heating pad and smoothed into place!',
    category: 'bags',
    price: 43.99,
    owner_id: u_lorem_bags5.id,
    stock: 1
)



#Category of Keychains
cat_and_dog_keychain = Product.create!(
    name: 'Buff Dog and Cat Keychain Set',
    description: 'Adorable muscular animals who are there to support you and bring you joy and happiness. You are no longer lonely!

        - Buff doggo size: 2 in x 2 in
        - Buff catto size: 2.3 in x 2.7 in
        - Printed on both sides (front and back)
        - Glossy acrylic finish, with an epoxy coating on top
        - Waterproof
        
        🌸 NOTES 🌸
        Please note that the colour of images may vary from screen to screen due to photography, lighting and screen settings. Minor errors may be possible as these products are handmade.',
    category: 'keychains',
    price: 12.99,
    owner_id: u_lorem_keychains1.id,
    stock: 17
)

flower_cow_keychain = Product.create!(
    name: 'Flower Cow Acrylic Keychain Set',
    description: 'This adorable flower cow keychain set makes for a great statement piece to attach to your backpack/handbag, key ring, or as a gift for your loved ones!
        
        Product details: 
        ★ Original design
        ★ Clear glitter acrylic + epoxy coated
        ★ 2 inch in length (acrylic part), whole keychain is 3 inch in length
        ★ Two sided design
        ★ Flower clasp (silver/gold/rosegold)
        
        Please note that colors may vary from different screens.',
    category: 'keychains',
    price:  8.99,
    owner_id: u_lorem_keychains2.id,
    stock: 10
)

cinnamoroll_swirlcake_keychain = Product.create!(
    name: 'Cinnamoroll Swirlcake Keychain',
    description: "Looking for a fun way to show off your love for Sanrio characters? Our Cinnamoroll keychain is perfect for you! With its adorable features, it's sure to bring a smile to your face every time you see it.",
    category: 'keychains',
    price: 4.99,
    owner_id: u_lorem_keychains3.id,
    stock: 24
)

gameboy_keychain = Product.create!(
    name: 'Cute Gameboy Keychain',
    description: '🖼️ 2.5 INCH HOLOGRAPHIC DOUBLE-SIDED ACRYLIC CHARMS. 🖼️
        ♦ Comes with gold star shaped clasp
        ♦ Charms are made of hard acrylic with glitter and epoxy coating.
        ♦ Double-sided print with acrylic finish.
        ♦ Holographic Touch for extra kawaii sparkles
        ♦ Very durable and great quality.
        
        🌞 SHOWCASE YOUR IDENTITY ANYWHERE. 🌞
        ♦ Perfect for bags, backpacks, pouches, phones, and big wallets!
        ♦ Take your fashion to the next level, and bring out that fan girl spirit inside you!
        
        💡 QUALITY REASSURED. 💡
        ♦ We create our products with love and passion.
        ♦ All items are quality assured, to make sure you receive the best quality product possible!',
    category: 'keychains',
    price:  9.99,
    owner_id: u_lorem_keychains4.id,
    stock: 2
)

cherry_keychain_set = Product.create!(
    name: 'Cherry Keychain Set',
    description: "This adorable cherry keychain set is the perfect accessory for any fruit lover or anyone who loves cute and fun accessories. The keychain 
        features a realistic cherry design with bright red colors and green leaves that add a touch of nature and freshness to your keys, bags, or backpacks.

        The keychain is made of high-quality materials that are durable and long-lasting, ensuring that your keys stay safe and secure while you're on the go. 
        Its compact size makes it easy to carry in your pocket or purse, and the sturdy metal ring ensures that you can attach it to any keyring or zipper pull.
        
        Whether you're looking for a fun and playful accessory to brighten up your day or a unique gift for a friend or family member, this cherry keychain is 
        sure to delight and bring a smile to your face. Order now and add some fruity charm to your everyday life!",
    category: 'keychains',
    price: 7.99,
    owner_id: u_lorem_keychains5.id,
    stock: 1
)


#Category of Gaming Accessories
sakura_resin_keycaps = Product.create!(
    name: 'Sakura Resin Custom Keycaps',
    description: "Handmade artisan keycap.
        
        A very sweet and cute way to add color to your mechanical keyboard. Enjoy the cuteness of the keycap.
        
        ♡ 100% homemade
        
        ♡ Items are made to order so they take a couple of days to make (4-5) so please be patient. But once they are completed they will be shipped out right away.
        
        ♡ I will always do my best to get the product as perfect as possible but as they are completely handmade they may still have some minor imperfections. Thank you for understanding!
        
        ♡ This keycap fits most mechanical keyboards. This keycap fits on any Cherry MX switches. Keycap is best used on ESC key, but can be used on any other keys. This resin keycap may fit a bit loose on some switches. I’ve tested them on many different switches; most fit but some fit slightly loose.
        
        ♡ Color varies as it is shown on the listing. Different screens may show different colors.",
    category: 'gaming accessories',
    price: 22.99,
    owner_id: u_lorem_gaming1.id,
    stock: 5
)

kirby_mouse_pad = Product.create!(
    name: 'Pink Kirby Mouse Pad',
    description: '✨ Best gift for K I R B Y fans!
        ✨ Wide, comfortable and durable mouse pad for gaming
        ✨ Clean and neat stitches
        ✨ Unique aesthetics
        
        Product description:
        ✨ Color: Pastel pink
        ✨ Size: 30 in x 13 in (L x H)
        ✨ Thickness: 3 millimeters
        ✨ Materials: Rubber pad',
    category: 'gaming accessories',
    price:  39.99,
    owner_id: u_lorem_gaming2.id,
    stock: 4
)

forest_switch_case = Product.create!(
    name: 'Starry Forest Nintendo Switch Case',
    description: "🐼Starry forest Nintendo Switch case with 2 game card storage boxes and a stand on the case itself. Design originally illustrated by me. 
        Digitally printed that will not fade in water. The main case is made from PC plastic and the joycon cases are made from TPU (soft) material which is
        environmentally friendly and can provide super good protection to your Nintendo Switch.

        🐰The card storage boxes can be detached and attached easily. Each box can hold one game card.
        🐰THERE ARE 4 CLIP/BUCKLES ON THE BOTTOM SIDE OF THE CASE, MAKE SURE YOU INSTALL THE BOTTOM SIDE FIRST, AND PUSH HARD TO HEAR 4 'CLICK' SOUNDS TO FASTEN IT TO THE CORRECT POSITION.",
    category: 'gaming accessories',
    price: 17.99,
    owner_id: u_lorem_gaming3.id,
    stock: 7
)

strawberry_switch_thumbgrips = Product.create!(
    name: '2pc Strawberry Nintendo Switch JoyCon Thumb Grips',
    description: '2pc Strawberry Nintendo Switch JoyCon Thumb Grips',
    category: 'gaming accessories',
    price: 5.99,
    owner_id: u_lorem_gaming4.id,
    stock: 11
)

sakura_pc_fan_cover = Product.create!(
    name: 'Sakura Cherry Blossom Logo V2 Gaming Computer Fan Shroud/Grill/Cover - Custom 3D Printed - 120mm, 140mm',
    description: 'This listing is for 1x custom printed cherry blossom computer fan grill/shroud/cover.

        This is designed to be placed over an LED or RGB fan to accent your gaming computer.
        
        These are made to order and are printed in PLA filament.
        
        If you are wondering what size fans you have, 120mm is definitely the most common size.
        
        Four (4x) fan screws are included for mounting.
        
        Please note that all of our products are 3D printed and may have imperfections characteristic of 3D printing, including layer lines and scars. These imperfections have no effect on the appearance of the mounted fan cover.
        
        I hope you enjoy this item.',
    category: 'gaming accessories',
    price: 38.99,
    owner_id: u_lorem_gaming5.id,
    stock: 1
)

#if quantity changes to 0 (is removed from cart, then it would just be the destroy method!!)
cart_item1 = CartItem.create!(shopper_id: u1.id, product_id: buff_hello_kitty.id, quantity: 1)
cart_item2 = CartItem.create!(shopper_id: u1.id, product_id: cartoon_bear_case.id, quantity: 1)
cart_item3 = CartItem.create!(shopper_id: u1.id, product_id: macaron_earrings.id, quantity: 1)
cart_item4 = CartItem.create!(shopper_id: u1.id, product_id: mushroom_bag.id, quantity: 1)

# review1 = Review.create!(product_id: stand_arrow.id, reviewer_id: u5.id, rating: 4, review: "This is an awesome collectable, but I feel sick after i nicked my skin with it")

# review2 = Review.create!(product_id: pokeball.id, reviewer_id: u5.id, rating: 5, review: nil)

review3 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u1.id, rating: 2, review: nil)
review4 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u2.id, rating: 5, review: nil)
review5 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u3.id, rating: 3, review: nil)
review6 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u4.id, rating: 4, review: nil)
review7 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u5.id, rating: 1, review: nil)
review8 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u6.id, rating: 3, review: nil)
review9 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u7.id, rating: 5, review: nil)
review10 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u8.id, rating: 1, review: nil)

review11 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_plushies1.id, rating: 1, review: nil)
review12 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_plushies2.id, rating: 1, review: nil)
review13 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_plushies3.id, rating: 1, review: nil)
review14 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_plushies4.id, rating: 1, review: nil)
review15 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_keychains2.id, rating: 1, review: nil)
review16 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_gaming1.id, rating: 1, review: nil)
review17 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_gaming2.id, rating: 1, review: nil)
review18 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_gaming3.id, rating: 1, review: nil)
review19 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_gaming4.id, rating: 3, review: 'Very nice!')

review1_case1 = Review.create!(product_id: pink_cinna_case.id, reviewer_id: u_lorem_phone_case2.id, rating: 5, review: "I really love the phone case, it looks super cute and it fits my phone perfectly, it's my favorite, thank you Soo much🥰💗")
review2_case1 = Review.create!(product_id: pink_cinna_case.id, reviewer_id: u_lorem_phone_case3.id, rating: 4, review: "The quality is amazing!! I love it")

review1_case2 = Review.create!(product_id: japanese_street_phone_cases.id, reviewer_id: u_lorem_phone_case1.id, rating: 3, review: 'Cute cases, am happy with this purchase')
review2_case2 = Review.create!(product_id: japanese_street_phone_cases.id, reviewer_id: u_lorem_phone_case4.id, rating: 4, review: 'I bought these for me and my best friend! They came in no time and are such good quality and super sturdy yet thin!! Love these cases!')


review1_jewelry1 = Review.create!(product_id: strawberry_earrings.id, reviewer_id: u_lorem_jewelry2.id, rating: 5, review: 'Very cute, not overly big to be gaudy, but still noticeable and detailed. Very pretty.')
review2_jewelry1 = Review.create!(product_id: strawberry_earrings.id, reviewer_id: u_lorem_jewelry3.id, rating: 5, review: 'Cute little strawberry earrings, super light weight so it doesn’t drag your earlobes. Could not recc enough!!')

review1_jewelry2 = Review.create!(product_id: cat_in_plant_earrings.id, reviewer_id: u_lorem_jewelry1.id, rating: 4, review: "Absolutely adorable, love the quality and can't wait to give them to my best friend. ♥️")
review2_jewelry2 = Review.create!(product_id: cat_in_plant_earrings.id, reviewer_id: u_lorem_jewelry4.id, rating: 4, review: 'Cute earrings! I think they will make a great gift!')

review1_jewelry3 = Review.create!(product_id: lily_of_valley_earrings.id, reviewer_id: u_lorem_jewelry1.id, rating: 5, review: "Beautiful jewelry set and well made! I bought it for a costume but I can see myself wearing it everyday! It's lovely!")
review2_jewelry3 = Review.create!(product_id: lily_of_valley_earrings.id, reviewer_id: u_lorem_jewelry2.id, rating: 4, review: 'I literally feel like a princess wearing this set, cannot recommend enough ♥️')


review1_plushie1 = Review.create!(product_id: candy_snake_plushie_set.id, reviewer_id: u_lorem_plushies1.id, rating: 4, review: "Absolutely adorable. I wasn't sure what I'd find when I searched for valentine's candy and snakes but I was floored to find this cutie. The 6 year old (recent snake lover) in my life is going to LOVE this little guy! <3")
review2_plushie1 = Review.create!(product_id: candy_snake_plushie_set.id, reviewer_id: u_lorem_plushies2.id, rating: 3, review: 'Cute snake and fast shipping')


review1_bag1 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_bags2.id, rating: 5, review: 'My girlfriend absolutely adore this one, if you are like me who has a gf who adores games like Stardew Valley you should definitely buy one of these')
review2_bag1 = Review.create!(product_id: mushroom_bag.id, reviewer_id: u_lorem_bags3.id, rating: 5, review: 'The crochet bag is beautiful. Love the detailing and the finish, exactly as i saw in the images. Our daughter is overjoyed. Thank you')

review1_bag2 = Review.create!(product_id: floral_bag.id, reviewer_id: u_lorem_bags1.id, rating: 5, review: 'Beautiful product, well crafted and sewn. Embroidery was outstanding.')
review2_bag2 = Review.create!(product_id: floral_bag.id, reviewer_id: u_lorem_bags4.id, rating: 5, review: 'Beautiful bags! I love that these came in a set because I can choose which color looks better with my outfit that day. These bags are the perfect size for me and they have enough room to put all my stuff from my previous tote bag. 10 out of 10 would recommend!')

review1_bag3 = Review.create!(product_id: convertible_cat_bag.id, reviewer_id: u_lorem_bags1.id, rating: 5, review: 'The quality and size of these bags are amazing! Comes with three straps to adjust and switch from over-the-shoulder to backpack mode. The lining on the inside is so cute, and the seller made sure to let me know of shipping delays due to weather.')
review2_bag3 = Review.create!(product_id: convertible_cat_bag.id, reviewer_id: u_lorem_bags4.id, rating: 5, review: 'Very cute! There is more space in these purses than I was expecting which was a pleasant surprise. My daughter is going to adore this!')


review1_keychain1 = Review.create!(product_id: flower_cow_keychain.id, reviewer_id: u_lorem_keychains1.id, rating: 4, review: 'Bought this for my wife she loved it so much! Adorable moo cows!')
review2_keychain1 = Review.create!(product_id: flower_cow_keychain.id, reviewer_id: u_lorem_keychains3.id, rating: 5, review: "It looks so adorable on my key chain. The actual hook part a cute flower looking shape. It has some sparkles inside. It looks thick enough I'm comfortable ir will hold up. It also shipped and arrived super quickly.")

review1_keychain2 = Review.create!(product_id: gameboy_keychain.id, reviewer_id: u_lorem_keychains2.id, rating: 5, review: "Wow this keychain is so adorable and cute that I've already gotten compliments on it!! I'm so happy to show it off 😊 Shipping was pretty fast too!! ")
review2_keychain2 = Review.create!(product_id: gameboy_keychain.id, reviewer_id: u_lorem_keychains5.id, rating: 4, review: 'Incredibly cute keychain! Super happy with the quality. It also got here quicker than I had anticipated, so that was a lovely surprise!')



review1_gaming1 = Review.create!(product_id: sakura_resin_keycaps.id, reviewer_id: u_lorem_gaming2.id, rating: 5, review: 'Nicely made it’s so pretty and smooth! Great customer service making sure everything is perfect. Thank you')
review2_gaming1 = Review.create!(product_id: sakura_resin_keycaps.id, reviewer_id: u_lorem_gaming3.id, rating: 5, review: 'Love these key caps! Definitely recommend')

review1_gaming2 = Review.create!(product_id: kirby_mouse_pad.id, reviewer_id: u_lorem_gaming1.id, rating: 4, review: 'A cute upgrade to my desk! The colors look good, and the mat is pretty thick.')
review2_gaming2 = Review.create!(product_id: kirby_mouse_pad.id, reviewer_id: u_lorem_gaming5.id, rating: 5, review: "As a major fan of the Kirby games this deskmat is perfect, the quality of the material is comfortable and very soft. It is true to the size listed. I'm so happy with my purchase highly recommend")

# pink_cinna_case (u lorem 1 )
#u_lorem_phone_case2 = User.create!(email: 'case2@epsum.com', name: 'empathy.calm', password: 'password')

# Review.create!(product_id: , reviewer_id: , rating: , review: )

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



