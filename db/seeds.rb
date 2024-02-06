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
vampire_mask = Product.create!(name: 'Weird mask', description: 'A mask carbon dated to be several thousand years old I got in a cave', category: 'alocalles', price: 30000.00, owner_id: u2.id, stock: 5)
master_sword = Product.create!(name: 'Blue sword', description: 'A sword I pulled out of a rock, that has a strange triangle pattern on the hilt and a large handguard.', category: 'weapons', price: 127, owner_id: u3.id, stock: 1)
ocarina_of_time = Product.create!(name: 'Ocarina', description: 'An ocarina found at the moat of a castle, still works though!', category: 'art and collectables', price: 25.00, owner_id: u3.id, stock: 1)
pokeball = Product.create!(name: 'Strong pouches', description: "I found these in a field of tall grass, they're made out of a really tough material.", category: 'jewelry and accessories', price: 100.00, owner_id: u4.id, stock: 19)
rengoku = Product.create!(name: 'Beautiful restored blade', description: "Looted (the pieces of) this blade in a forest, but the material is very sturdy and I've never seen metal like this before.", category: 'weapons', price: 20000.00, owner_id: u4.id, stock: 1)
elder_wand = Product.create!(name: 'Old powerful wand', description: 'This wand seems hold an amazing amount of power, but as a merchant it seems too dangerous to use or hold on to. It seems that it can heavily elevate the magic spells available to its caster!', category: 'weapons', price: 3000.00, owner_id: u9.id, stock: 1)


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
    owner_id: u8.id,
    stock: 4
)

japanese_street_phone_cases = Product.create!(
    name: "Japanese Street Landscape Pink and Green Phone Case Set",
    description: "Introducing our enchanting Japanese Street Landscape Phone Case in delightful shades of pink and green! This exquisite accessory encapsulates the captivating beauty of Japan's bustling streets, bringing a touch of serenity and elegance to your smartphone.

        Immerse yourself in the picturesque scenery of cherry blossom trees, traditional lanterns, and vibrant storefronts, creating a harmonious blend of urban energy and natural tranquility. Crafted with precision and care, this durable case offers optimal protection against everyday bumps and scratches while maintaining a slim and lightweight design.
        
        The pink and green colour scheme adds a fresh and playful touch, perfectly complementing your personal style. Elevate your phone's aesthetic with our Japanese Street Landscape Phone Case and embark on a journey through the vibrant streets of Japan wherever you go.",
    category: 'phone cases',
    price: 24.99,
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    price:         ,
    owner_id: u8.id,
    stock: 
)

lily_of_valley_earrings= Product.create!(
    name: 'Lily of the Valley Jewelry Set',
    description: 'Adorn this gorgeous jewelry set when you want to look elegant and classy, but still want to stand out and 
        be the belle of the ball. This set is handmade. The necklace is made with high-quality glass beads, 
        featuring a lobster claw closure style as well as being adjustable in length. Custom lengths are available at no extra charge. 
        Earrings are made with the same high-quality glass beads and are of a classic dangle 
        style with a roughly 4cm drop (this length cannot be changed), featuring a fish hook back.',
    category: 'jewelry',
    price: 31.99,
    owner_id: u8.id,
    stock: 5
)



#Category of Plushies
ruby_the_cow = Product.create!(
    name: 'Ruby the Strawberry Cow',
    description: "This is Ruby, the Strawberry Cow. She's handmade, adorable, and has a magnetic/removable strawberry on top of her wittle precious head. Measures approximately 8 inches tall.",
    category: 'plushies',
    price: 31.99,
    owner_id: u8.id,
    stock: 4
)

milkshake_the_cow = Product.create!(
    name: 'Milkshake the Strawberry Cow',
    description: "Meet Milkshake, the new and improved Strawberry Cow! This cow is approx. 11.5 inches tall including horns. 
        She's made with medium length faux fur that is super soft, and is a sweet pink color. She has embroidered 
        features, and a minky fabric for her belly and inside of her ears.",
    category: 'plushies',
    price: 32.99,
    owner_id: u8.id,
    stock: 8
)

#The above two products should have the same owner_id

buff_hello_kitty = Product.create!(
    name: 'Buff Hello Kitty',
    description: 'A big buff Hello Kitty to protect you from evil. Can also act as a boyfriend replacement.',
    category: 'plushies',
    price: 28.99,
    owner_id: u8.id,
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
    owner_id: u8.id,
    stock: 11
)

candy_snake_plushie_set = Product.create!(
    name: 'Kawaii Candy Snake Plushie Set',
    description: "Pink/lavender soft minky plush snakes with beautiful embroidered candies! Frosted sprinkles on bellies!
        Perfect gift for a snake lover or kawaii niche lover! The snake can wrap around your arm to keep you company or be a fashion accessory!
        
        Perfect for any plush collector! 💖",
    category: 'plushies',
    price:  45.99,
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
    stock: 10
)

cinnamoroll_swirlcake_keychain = Product.create!(
    name: 'Cinnamoroll Swirlcake Keychain',
    description: "Looking for a fun way to show off your love for Sanrio characters? Our Cinnamoroll keychain is perfect for you! With its adorable features, it's sure to bring a smile to your face every time you see it.",
    category: 'keychains',
    price: 4.99,
    owner_id: u8.id,
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
    owner_id: u8.id,
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
    owner_id: u8.id,
    stock: 1
)

sakura_artisan_keycaps = Product.create!(
    name: 'Kawaii Pink/White Sakura Artisan Keycaps for Mechanical Keyboards',
    description: "Handmade artisan keycap.
        
        A very sweet and cute way to add color to your mechanical keyboard. Enjoy the cuteness of the keycap.
        
        ♡ 100% homemade
        
        ♡ Items are made to order so they take a couple of days to make (4-5) so please be patient. But once they are completed they will be shipped out right away.
        
        ♡ I will always do my best to get the product as perfect as possible but as they are completely handmade they may still have some minor imperfections. Thank you for understanding!
        
        ♡ This keycap fits most mechanical keyboards. This keycap fits on any Cherry MX switches. Keycap is best used on ESC key, but can be used on any other keys. This resin keycap may fit a bit loose on some switches. I’ve tested them on many different switches; most fit but some fit slightly loose.
        
        ♡ Color varies as it is shown on the listing. Different screens may show different colors.",
    category: 'gaming accessories',
    price: 25.00,
    owner_id: u8.id,
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
    price:  40.00,
    owner_id: u8.id,
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
    owner_id: u8.id,
    stock: 7
)

strawberry_switch_thumbgrips = Product.create!(
    name: '2pc Strawberry Nintendo Switch JoyCon Thumb Grips',
    description: '2pc Strawberry Nintendo Switch JoyCon Thumb Grips',
    category: 'gaming accessories',
    price: 5.99,
    owner_id: u8.id,
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
    owner_id: u8.id,
    stock: 1
)

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



