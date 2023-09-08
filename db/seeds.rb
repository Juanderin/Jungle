# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

require "open-uri"

ApplicationRecord.transaction do 
    puts "Destroying tables..."

    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
  
    Review.destroy_all

    Cart.destroy_all
    
    User.destroy_all

    User.create!(
      username: 'juan',
      email: 'juan@email.com',
      password: 'password'
    )
  
    puts "Done!"
  end



  Product.destroy_all

p1 = Product.create!(
    product_name: "Dumbell",
    description: "Great workout dumbells for whenever the exercise moment hits.
    10 pound dumbbell (set of 2) for exercise and strength training
    * Neoprene coating in Navy Blue offers long lasting durability
    * Hexagon shaped ends prevent dumbbells from rolling away and offer stay-in-place storage
    * Nonslip grip promotes a comfortable, secure hold
    * Available in multiple sizes to mix and match for specific workout needs and to expand on over time
    * Printed weight number on each end cap and color coded for quick identification",
    product_price: 9.99,
    category: "Exercise"
)

p1.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/dumbell.jpg"),filename: "dumbell.jpg")

p2 = Product.create!(
    product_name: "Hand Dinosaur",
    description: "For when you need a hand puppet show from the prehistoric era.
    * Finger puppet set includes 5 finger puppets, including 1 head and 4 feet. 

    * Finger puppet size suitable for children and adults.
    
    *  Finger puppet made of premium quality polyvinyl chloride plastic, which is eco-friendly and non-toxic. Not easily deformed, moderate hardness and no unpleasant smell.
    * Cute finger puppet toys, perfect for white elephant games, children's birthday gifts or baby shower toys, will bring you plenty of fun. It is also a good idea as a prop for Christmas, Easter eggs, table decoration, party gathering, etc.
    There are other styles of finger animal dolls, please check the product pictures or visit the store. We also have some combination styles for you to choose from, so don't miss out.",
    product_price: 6.99,
    category: "Recreation"
)

p2.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/dinosaur.jpg"),filename: "dinosaur.jpg")


p3 = Product.create!(
    product_name: "Scented Candle",
    description: "For when your room needs that specific ooomph, our candle can bring the most diverse smells to your room. May not be suitable for everyone.
    * High-Quality Paraffin Wax that burns to slowly
    * BURN TIME | 40-50 HOURS | The Wick Works candle burns like it won't end, basically like 2020.
    * DIMENSIONS | 5″ wide x 3.4″ deep x 3″ tall | About the size of a coffee mug laying on its side…after you've spilled it all over your keyboard.
    * FUNNY OR SAD? | Can't it be either? This is the ultimate piece of home decor, perfect for yourself or as a gift. Wouldn't it look great in the background of your next conference call? Don't burn it, burn it halfway, or burn it all to the ground!
        
    ",
    product_price: 15.99,
    category: "Home"
)

p3.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/candle.jpg"),filename: "candle.jpg")


p4 = Product.create!(
    product_name: "Stylish Chicken Handbag",
    description: 
    
    "Our bag offers unique styling that only the most enthusiastic fashionista's can appreciate.
    Introducing the quirky and playful Rubber Chicken Purse - The Hen Bag Handbag! This one-of-a-kind accessory is sure to turn heads and bring a smile to everyone's face. Crafted with attention to 
    detail, this unique handbag resembles a classic rubber chicken, adding a touch of whimsy and fun to any outfit. The purse features a spacious interior to
    hold all your essentials, while the durable rubber material ensures it can withstand everyday use. Whether you're attending a costume party, a themed event, or simply looking to make
    a bold fashion statement, the Rubber Chicken Purse is the perfect conversation starter and a delightful 
    addition to your accessory collection. Embrace your sense of humor and add a dash of amusement to your style with this hilarious and eye-catching Hen Bag Handbag.",
    product_price: 1099.99,
    category: "Fashion"
)

p4.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/chickenbag.jpg"),filename: "chickenbag.jpg")

p5 = Product.create!(
    product_name: "Coco Dunk On Em'",
    description: "For when the hot coco isnt enough. Does the day to day coffee not do it for you. Get this sporty add on to your favorite beverage, coco sold separately.
    * START YOUR MORNINGS WITH FUN! Play with your food with this original basketball mug with an attached hoop. These unique mugs are perfect for scoring mini-marshmallows into cocoa, cereal into milk, crackers into soup, or toppings onto ice cream! Something to root for in your morning routine with these cool mugs!
    * THE PERFECT GIFT IDEA FOR SPORT LOVERS- MAX'IS Creations mugs are the ideal gift for coaches, kids, teens, mom, dad, boyfriend or girlfriend, any sport lover! Don’t know what to get a friend for Christmas or his/her birthday? Does he/she like basketball, soccer, softball, baseball, golf or hockey? We got you! This will be the perfect, cutest and most coveted gift ever and you will be the gifting MVP. Great for Secret Santa and Yankee Swaps, too!
    * THE NOVELTY COFFEE MUG FOR KIDS/TEENS- These basketball gifts for boys 8-12 & girls are guaranteed fun! Help your child or grandchild be thrilled to wake up for breakfast before school! MAX'IS basketball stuff for boys & girls are useful, aesthetic and great entertainment for every child who loves sports or simply, loves to play! After all, as Max says, the world would be better if we could play with our food!
    * CUTE PACKAGING- Your purchase includes 1 single basketball hoop mug in a colorful gift box that tells Max’s story! (The food in the images is shown for display purposes and it is not included (just saying) ).
    * LONG LASTING & HIGH QUALITY - These basketball coach gifts and more are made from high quality stoneware (FDA, Prop-65 and CPSIA safety standards). Dishwasher and microwave safe. Made in Thailand.
    * UNIQUE & HANDCRAFTED – Our basketball accessories are extra special because they are hand assembled and hand-painted, so each novelty mug is unique and will vary slightly :) ",
    product_price: 20.99,
    category: "Home"
)

p5.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/coco.jpg"),filename: "coco.jpg")

p6 = Product.create!(
    product_name: "Danny Devito Sequin Pillow",
    description: "Ever felt like you were missing some Devito from your life? Look no further, this pillow will change on swipe, have the man himself give you a glowing glare.
    * Polyester
    * Package Include: 1PC Danny DeVito Sequin Pillow Cover (Pillow inserts are NOT included), Size: Approx.16x16 (40cm x 40cm). The sequins pillow cover which is applicable to both 16x16 inches and 18x18 inches pillow filler.
    * Mermaid sequins pillow covers, the front is double-sided sequins, and the back is made of soft suede fabric. You can sleep on the back when you are tired, you can take it as an ordinary stuffer pillow to rest.
    * Funny Design: The flip technology makes it easy to play write and design on danny devito sequin pillows. Run your fingers across the sequin, you can get a different color or get a picture. Just like magic. Hidden zipper closure.
    * Best Gift: A great funny pillows cover for the fans. This sequin pillowcase can be used as a fun/unique gift for back to college gift, halloween, christmas, thanksgiving, birthday, party. Suitable for office, cafe, cars, home, bedrooms, sofa, etc any home decor.
    * Washing Tips: Turn it inside out and wash it by hand. Swish it through warm soapy water, rinse and press between towels to remove excess water. Then lay flat to dry.",
    product_price: 49.99,
    category: "Home"
)

p6.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/danny.jpg"),filename: "danny.jpg")

p7 = Product.create!(
    product_name: "Atlantis Formal Wear",
    description: "Ever felt our of place amoungst a group of aquatic elites? Well this garmet will elevate your presence, known as an important addition to a night out, this piece will help you stand out and swim ahead. You will be the big fish!
    a remarkable blend of enchantment and sophistication. This intricately designed mask draws inspiration from the legendary city of Atlantis, capturing the essence of its underwater wonders. Handcrafted with meticulous care and attention 
    to detail, the mask features delicate embellishments and shimmering crystals that add a touch of elegance and allure. Crafted for both style and comfort, it complements any formal attire effortlessly. Whether you're attending a 
    masquerade ball, a themed gala, or a special event, our Atlantis Formal Wear Fish Mask is sure to make a lasting impression. Embrace the charm of ancient legends and elevate your ensemble with this stunning and unique accessory, transporting you to a world of wonder and fascination.",
    product_price: 2000.99,
    category: "Apparel"
)

p7.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/mask.jpg"),filename: "mask.jpg")

p8 = Product.create!(
    product_name: "Sebas The Earbuddy Crab",
    description: "We all need a helpful crustacean to elevate our sound. Known for his diligence with a certain mermaid Sebas will uphold your sound.
    * Lovely Shape Our cute and vivid crab pen holder is very delicate and compact when placed on the table. The funny pen holder can quietly accompany you like a small companion, reducing your loneliness when alone. The crab pencil holder holds up the pen and seems to say cheer to you. The realistic and funny pen holder can add fun to your daily boring work life. The crab pen holder is the best easter gift for your father, who works hard every day
    * Small Body, Huge Energy❆ Our Japanese stationery is a Hercules although it doesn't have a huge body. The powerful pair of pincers of the crab pen holder for the desk can effortlessly lift your pencils, eyebrow pencils, lipsticks, pen, keys, and other small items. Our cute Japanese stationery can meet your diverse user needs
    * Multi-use Our crab pen holder can act as an organizer to help you store your small and scattered things and keep your desk looking organized, thus saving you time in finding your items. This crab pencil holder can also be used as a delicate little desktop decoration to add charm to your table
    * High-Quality Material Made of high-quality plastic material, the pen holder has a smooth surface, is lightweight, strong, and not easy to damage with long-term use. The funny pen holder is easy to carry so that you can put the Japanese stationery into your backpack, handbag, pocket while going out
    * Best Easter Day Decorations Gift❆ The cute Japanese stationery is the best choice for holiday gift-giving. The cute appearance of the crab pen holder for the desk is popular with people. You can give the crab pen holder to children as a toy or school supplies. The crab pencil holder is also an interesting gift for your wife or girlfriend to store or display their accessories as the easter day accessories",
    product_price: 2.00,
    category: "Home"
)

p8.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/crab.jpg"),filename: "crab.jpg")

p9 = Product.create!(
    product_name: "OstrichPillow, head in the clouds",
    description: "Ever had enough of the outside world, powernaps not comfy enough? Well this pillow will set you straight. Feel like you are drowning in your matress, wherever you go!
    Microfiber
    Made in USA or Imported
    * 💁 DREAM IN STYLE | The revolutionary sensation OSTRICHPILLOW ORIGINAL is the ultimate immersive travel pillow! Use it for a power nap, lounging at home, or wherever you may be, without moving an inch. Just slip it on and you're off to dreamland.
    * 💆🏼‍♂️ CUSTOM FEEL | Lovingly hand made using a dreamily soft high quality combination of viscose and elastomer, together with the next generation coated microbead filling create a perfect partnership, helping you drift calmly into relaxation mode.
    * 🧘 IMMERSIVE DESIGN | With its unique design, this travel pillow will disconnect you from your surroundings, reducing the light and ambient sound. With an opening on the front side, you can breathe easily, along with two more openings for your hands.
    * 🎁 FANTASTIC GIFT FOR FAMILY & FRIENDS | Surprise your loved ones with a great present that will help them make their trips better. This travel pillow will help their neck rest and make their trips more comfortable by taking them to a relaxing spot.
    * 🧼 HAND WASHABLE | You can gently spot clean your blackout mask Ostrichpillow using mild soap and water, making sure to thoroughly air dry afterwards, so it feels good as new! Please visit our website for full care instructions.",
    product_price: 79.99,
    category: "Comfort"
)

p9.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/ostrichpillow.jpg"), filename: "nappillow.jpg")

p10 = Product.create!(
    product_name: "Hamburger Phone",
    description: "For when ordinary calls lack cheesyness, this hamburger phone can send you to a world of pre 2010's modernism when phones had more beef.
    Technically, this is a cheeseburger phone, not a hamburger phone. But you'll just call it your new best friend. The burger phone has the following functions:
    * Redial a call function
    * Tone/Pulse Switchable
    * Molded plastic: bun, cheese, ground chuck patty
    * LED In-use indicator",
    product_price: 502.99,
    category: "Electronics"
)

p10.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/cheesyphone.jpg"),filename: "cheesyphone.jpg")

p11 = Product.create!(
    product_name: "Mearens Magnetic Hooks",
    description: "【Super Magnetic Hooks】- Made of high-grade and exquisite quality magnet and steel offer more than 22lbs a vertical hanging and the power reduced by 2/3 on horizontal hanging. Steady without Sliding.
    *【Excellent layer Coating】- Ni+Cu+Ni Triple Layer Coated. The best coating available, which provides a shiny and rust resistant coated steel cup provides protection for the metal magnet hooks and helps to prevent chipping or cracking, making magnetic hooks ideal for long term use.
    *【Easy to Use】- The heavy duty magnetic hooks are easy to remove and fit in anywhere there is iron or steel, stable without drilling. No more holes in your walls or furniture, These are ideal magnetic hanging hooks for long-term use.
    *【Versatile to Use】- The cruise essentials hooks are fairly small and don't take up too much space. perfect for hanging grill tools. decorative lights and tool accessories, also be widely used in cruise, fridge, kitchen, locker, workplace office, garage, indoor, outdoor and anywhere there is iron or steel.
    *【Quality Guarantee】- Please contact us through Amazon if you have quality problems.",
    product_price: 9.99,
    category: "Home"
)

p11.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/hook.jpg"),filename: "hook.jpg")

p12 = Product.create!(
    product_name: "Crocs unisex-adult Classic Lined Clog",
    description: "100% Synthetic
    * Imported
    * Faux Fur
    * Ethylene Vinyl Acetate sole
    * Shaft measures approximately 3#inches from arch
    * Heel measures approximately 0.73
    * WARM AND FUZZY FEELINGS INSIDE: Designed with function and warmth in mind, the soft and lined Crocs for men and women are great as a slipper but also perfect for running errands.",
    product_price: 59.99,
    category: "Apparel"
)

p12.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/clog.jpg"),filename: "clog.jpg")

p13 = Product.create!(
    product_name: "Hydro Flask",
    description: "TempShield double-wall vacuum insulation keeps drinks cold up to 24 hours, hot up to 12
    * Flex Cap is leakproof when closed
    * Honeycomb Insulated Cap for maximum temperature retention
    * Made with 18/8 pro-grade stainless steel for durability, pure taste and no flavor transfer
    * Color Last powder coat is durable, sweat-free and colorful
    * BPA-Free
    * Dishwasher safe",
    product_price: 20.99,
    category: "Accessories"
)

p13.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/flask2.jpg"),filename: "flask2.jpg")

p14 = Product.create!(
    product_name: "Wireless Bluetooth Headphones",

    description: "Unique Open Ear Design for Comfort and Safety:Our open ear headphones feature a unique design that provides both comfort and safety. 
        They don't block or cover your ears, allowing you to hear your music and your surroundings simultaneously. 
        Whether you're working out, running, cycling, hiking, or engaged in other daily activities, these headphones offer a comfortable and secure fit.

    * Enhanced Bluetooth Connectivity and High-Definition Sound Quality: Experience enhanced Bluetooth connectivity with our wireless headphones.
     Stay connected within a range of up to 10 meters and enjoy high-definition sound quality for an immersive audio experience.


    * Intuitive Touch Control Functionality: Our headphones are equipped with intuitive touch controls, 
    allowing you to effortlessly control music playback, adjust volume, and switch songs with a simple touch. Enjoy a seamless and convenient user experience.

    * IP55 Waterproof Rating for Active Lifestyles: Our headphones are designed with an IP55 waterproof rating, 
        making them resistant to sweat, rain, and light splashes. They are perfect for 
        outdoor activities, ensuring durability and reliability in various weather conditions.

    * Long Battery Life and LED Power Display: Our headphones provide up to 20 hours of 
        continuous music playback, ensuring you have enough power for your activities. The LED power display keeps 
        you informed about the battery status, allowing you to plan your charging schedule.",

    product_price: 29.99,
    category: "Electronics"
)

p14.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/lock.jpg"),filename: "lock.jpg")
 

p15 = Product.create!(
    product_name: "Humidifier for Bedroom",

    description: "[Dry Air Relief Helper] INSENVO ultrasonic cool mist humidifier use ultrasonic cool mist technology which can moisturize dry 
        air safely and quickly. Indoor air humidity can help relieve cough and congestion, keep throat and nasal passages hydrated. 
        Our upgraded humidifiers pioneered the main circuit board overhead the water tank, thus the water will not overflow the mainboard to cause short-circuit.

    *【Home Comfort Companion】The air humidifiers offer 3 Level speed settings can meet your different needs for different seasons. 
        INSENVO home humidifier helps you consistently balance and regulate the humidity in your home during any
         dry months for relief from coughing, colds, 
         congestion, sore throat, sinus issues, allergies, and dry skin. Better home comfort companion for your lovers and families.",

    product_price: 9.99,
    category: "Home"
)

p15.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/humid.jpg"),filename: "humid.jpg")


p16 = Product.create!(
    product_name: "Appa Sitting Plush",

    description: "YOUTOOZ AVATAR APPA PLUSHIE: Sitting, literally, at 12 inches, Appa is masterfully balancing on his 
        butt with his 6 paws hovering. His belly is out in the open for the perfect and most optimal tummy rubs. 
        Have him sit on the couch with you and watch some TV, or have him chill on your desk while your clutching your 1v4, Appa is just happy to spend some time with you.
    * JUMBO APPA PLUSH: Youtooz Appa Sitting stuffed animal is 12 inches sitting upright. 
        This Avatar plush collectible safely ships in a polybag to protect it from the elements on its journey to your home!
    * YOUTOOZ THE LAST AIRBENDER COLLECTION: stuffed Appa is super soft and made of the same soft huggable quality as his friends Aang and Toph!
    * A GIFT FOR AVATAR FANS: Youtooz stuffed Appa Flop plushie makes for the perfect gift for any Avatar: The Last Airbender fan.
    * AUDIENCE: Youtooz Appa plush is intended for Ages 15+",
    product_price: 20.99,
    category: "Accessories"
)

p16.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/appa.jpg"),filename: "appa.jpg")


p17 = Product.create!(
    product_name: "Aang On Air Scooter Keychain",
    description: "* Pull On closure
    * Officially Licensed Avatar: The Last Airbender Keychain
    * Manufactured by Zen Monkey Studios
    * Soft enamel keychain with epoxy finish.",
    product_price: 8.99,
    category: "Accessories"
)

p17.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/aang.jpg"),filename: "aang.jpg")


# p18 = Product.create!(
#     product_name: "Takumi Background Model Car",
#     description: "Materials: Acrylic Cover, Wood Base, ABS Plastic with UV Print on the panel. The reduction is perfect.
#     * Size: 1:32 ae86 Fujihara Tofu Store Car Model Kit 11.25*6.29*6.96 in (With Acrylic Cover).With a same size AE86 Die-cast Vehicle.
#     * Display: Led light powered by USB on top of panel makes this model kit well display in dark. This Die-cast model car
#         can open car door, hood, trunk boot. And it also can turn on the head light by LR44/AG13 1.5v battery(3pcs).
#     * Easy Assembled: Easy assemble without tools. You can also display other car models.
#     * Good rating:We've done lot of good rates in Gen1. And we continue improving this product. As you see this is the version 2.0. More detail, More clean. Hope you like this.",
#     product_price: 65.89,
#     category: "Home"
# )

# p18.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/ae86_.jpg"),filename: "_ae86.jpg")


p19 = Product.create!(
    product_name: "Ecowaare Set of 15 Reusable Mesh Produce Bags",
    description: "Zero Waste and Eco-friendly --- One more step closer to a zero waste lifestyle and cuts plastic bag use in a 
        convenient way; Get 15 pcs reusable and durable bags, great addition to your goal of being plastic free and helping the 
        environment,and each mesh bags has the potential to eliminate up to 1000 plastic bags over it's lifetime.
    * Safety and Lightweight --- BPA free and 100% food contact safe, with the highest standards
        of quality, safely hold all your fresh produce. Made of ultra fine yet strong mesh polyester, the mesh bag is super lightweight that it won't add weight to your produce.
    * Scan Through Easily --- Unlike most non-transparent mesh bags from other brands, our produce bags is 
        nearly transparent so you can easily see through the bag to know what's inside;bar-codes will scan right in the bag so 
        that the cashier will be able to see the item numbers and also make your checkout faster.",
    product_price: 11.99,
    category: "Home"
)

p19.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/produce.jpg"),filename: "produce.jpg")


# p20 = Product.create!(
#     product_name: "Squishy Steamed Stuffed Bun",
#     description: "* 🍥【Steamed Stuffed Bun Toy】The appearance of the steamed bun squishy stress ball is in the style 
#     of steamed buns, with clear and realistic texture, and a small steamer can store dumpling squishy toy, making the toy more vivid. 
#         The size of the bun is about 8.5cm(L)x5.5cm(H), and The size of the steamer is about 9.5cm(L)x6cm(H).this artifical dumpling stress ball
#         must be a great gift, such as April Fools birthday and other holidays.
#     * 🎯【Stress Relief Toys】The dumpling steamed bun squishy is a wonderful stress relief toy. You can knead the dumpling stress ball into 
#         any shape you want, no matter how hard you try. You just need to put the dumpling squishy stress ball in the palm of your hand and knead it, 
#         which will help you to release stress and anxiety. Or, If you type too much at work, you can also use this 
#         dumpling stress ball to move your finger joints so as to relieve pain.",
#     product_price: 7.89,
#     category: "Home"
# )

# p20.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/bao_.jpg"),filename: "bao.jpg")


p21 = Product.create!(
    product_name: "WAW Badfish Bodysurfing Handplane",
    description: "BODYSURF and CLEAN THE OCEAN. The WAW BadFish bodysurfing handplane is made using plastic waste collected from Australias Great Barrier Reef. 
        The equivalent to one whole shopping bag goes into each handplane.
    * EASY TO USE - The WAW BadFish offers unrivaled bodysurfing enhancement whilst doing good for the planet. Offering ultimate paddling freedom and superior lift, speed and control.
    * TAKE YOUR BODYSURFING TO THE NEXT LEVEL - The WAW BadFish handplane works by generating lift on your lead hand.
         The lift brings your body up onto the waters surface, therefore reducing your drag allowing you bodysurf waves faster, longer and with way more control.",
    product_price: 60.99,
    category: "Exercise"
)

p21.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/handsurf.jpg"),filename: "handsurf.jpg")


p22 = Product.create!(
    product_name: "BandD Levitating Plant Pot",
    description: "👁️‍🗨️ UNIQUE AND EYE CATCHING- Beautifully designed levitating plant holder pot, guaranteed to draw the attention of anyone who enters the room. 
        No other decoration will have the same effect as our magnetic planter for floating plants.
    * ✔️ SUPERB QUALITY- The highest quality levitating planter used for a variety of small plants, succulents, air-plant & bonsai tree. 
        They will grow strong and healthy while suspended in mid air. Use an artificial plant as a maintenance free option.",
    product_price: 65.99,
    category: "Home"
)

p22.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/float.jpg"),filename: "float.jpg")


p23 = Product.create!(
    product_name: "Iron Man Wireless Mouse",
    description: "800 / 1200 / 1600 DPI Resolution Optical Tracking Technology provides more sensitivity than standard optical mice for smooth and precise tracking on a wide range of surfaces.
    * Snap-in Nano transceiver stows conveniently in the bottom of the mouse.
    * Innovative design to provide comfort and control for either hand.
    * Reliable 2.4GHz wireless connection with up to 33-foot range.
    * Work perfectly for Windows XP, Windows Vista, Windows 7, Mac OS X 10.4 etc. 
    (Pls Note: this mouse is connected by USB receiver, will NOT compatible with MacBook Pro or other devices which only have Type C ports)",
    product_price: 15.99,
    category: "Electronics"
)

p23.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/ironman.jpg"),filename: "ironman.jpg")


p24 = Product.create!(
    product_name: "FloatGo Floating Light Bulb Lamp",
    description: "* PERFECT GIFT - Great gift for lover,friends,parents,kids at Christmas, birthday , holidays, wedding, anniversary and business. Image when they receive and open the box, it will bring them much surprise!
    * ENERGY EFFICIENCY - The energy efficient LEDs working life is up to 50,000 hours. That is 12 hours a day for 11 years!
    * 10W WIRELESS CHARGING: The floating light bulb lamp features a built in wireless charger for Phone 12/12 Pro/11/11 Pro/XR/XS/X/8/8+/Air pods, Galaxy Note 10/Note 10+/S10/S10+/S9/S8. This is the PERFECT LAMP for you!
",
    product_price: 88.99,
    category: "Electronics"
)

p24.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/floatlamp.jpg"),filename: "floatlamp.jpg")

p25 = Product.create!(
    product_name: "Skateboard USB Flash Drive",
    description: "Skateboard USB flash drive is a perfect usb drive for kids who love to skate. Make your passion for skateboarding reflect in this school accessory storage device. A stylish accessory for kids for schools and colleges. Experience premium, reliable and secure storage.
    * Speed: Read: 12 - 18 Mb/secs; Write: 4 - 6 Mb/secs
    * Design: Skateboard
    * Color: Blue
    * Memory Size: 16 GB 
    ",
    product_price: 13.99,
    category: "Electronics"
)

p25.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/flashskate.jpg"),filename: "flashskate.jpg")


p26 = Product.create!(
    product_name: "RSVP Just Ducky Floating Tea Infuser",
    description: "A whimsical floating tea infuser that will put a smile on your face every time you use it
    * Measures 2-inches in diameter by 3-1/4-inches tall
    * Infuser is made of 18/8 stainless steel, Ducky is made of BPA free plastic
    * Fill with loose tea and let steep until the desired strength has been achieved
    * Hand washing recommended
    ",
    product_price: 9.66,
    category: "Home"
)

p26.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/ducktea.jpg"),filename: "ducktea.jpg")


p27 = Product.create!(
    product_name: "Mouth Squeaky Chew Dog Toy",
    description: "This two pack of smiling mouth chew toys is perfect for your dog or puppy. Coming with one red and one blue toy, these funny novelty chew toys are sure to be fun for both you and your pet!
    * Two smiling mouth dog toys
    * Colors: one red, one blue
    * Funny novelty chew toys
    * Squeaky Chew toy is perfect for dogs and puppies
    ",
    product_price: 15.29,
    category: "Home"
)

p27.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/dogteeth.jpg"),filename: "dogteeth.jpg")


p28 = Product.create!(
    product_name: "AirPod SpongeBob Pineapple Case",
    description: "Compatible With: Only suitable for Airpods 1st generation and 2nd generation Case, 
        it fits perfectly with the Airpods 2&1, and the precise opening position makes it easy to use the
        charging port, take out and put in the headset.
    * High Quality Material: The protective cases designed for Airpod 1/2 are made of soft durable 
        silica gel. The rubber surface will not fade during long-term use.it is not easy to be torn and deformed.
    * Aesthetic Design: This cute cartoon stylish and unique AirPods 
        earphone protective shell is colorful and interesting in shape, fashionable and popular. 
    * Lightweight and thin, comfortable to touch.
    ",
    product_price: 9.99,
    category: "Accessories"
)

p28.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/pineapple.jpg"),filename: "pineapple.jpg")


p29 = Product.create!(
    product_name: "Spider-Man Super Web Slinger",
    description: "BLAST WITH WEB FLUID OR WATER: Load a can of Web Fluid (included) or use the refillable water cartridge (included) to blast enemies with this Spider-Man Web Slinger (Web Fluid refills sold separately)
    * WEARABLE GLOVE ATTACHES TO WRIST: Suit up with the glove and velcro on this Spider-Man web shooter toy to imitate Spider-Mans signature thwip move and blast web fluid or water. Would be a webtastic addition to any Spider-Man party!
    * MARVEL SPIDER-MAN MOVIE-INSPIRED: This Spider-Man toy is inspired by the Marvel Cinematic Universe that includes the latest Spider-Man movie. A great addition to any Spider-Man costume for boys and girls!
    ",
    product_price: 22.99,
    category: "Accessories"
)

p29.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/spidey.jpg"),filename: "spidey.jpg")



p30 = Product.create!(
    product_name: "Abdominal Exercise Roller Wheel",
    description: "Automatic Rebound for Smooth Fitness Routines - Are you ready to take your fitness to the next level? Experience a hassle-free workout with the Bemmer Automatic Rebound Ab Abdominal Exercise Roller Wheel. The automatic rebound feature ensures safe and easy exercise, protecting your muscles and preventing sports injuries.
    * Sculpt Your Abs and Waistline: Achieve the Perfect Silhouette - Unleash your potential with the Bemmer Exercise Roller Wheel! This fitness tool specifically targets your abs and waistline, helping you achieve that coveted hourglass figure. Get ready to turn heads and feel confident in your own skin. Are you ready to redefine your waistline?
    * Floor-Friendly Design: Soft Material for Damage-Free Workouts - Say goodbye to worries about damaging your floor! The Bemmer Exercise Roller Wheel features a soft material construction that ensures no scratches or marks on your floor surface. Focus on your fitness goals without any distractions. Ready to work out without leaving a trace?",
    product_price: 48.99,
    category: "Exercise"
)

p30.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/workout.jpg"),filename: "workout.jpg")


p31 = Product.create!(
    product_name: "Under Desk Bike Pedal",
    description: "Heavy Flywheel Exercise Bikes Increases Stability:▼ This TECHMOO under desk bike pedal exerciser adopts an internal 5LBS metal flywheel to greatly improves the stability. Not only makes it effortlessly to use for a long time, but it also avoids the movement problem of the trainer during use.
    * Carpet Special Anti-Kid Pad:▼ The normal 4pcs wave shape pad enhanced the frictional force between bike and floor, which brings steady using. Don’t worry, these nail point pads and normal pads are made in soft rubber and will not hurt your carpet or floor. Which makes the mini exercise bike more stable whether on the carpet or on the ground.
    * Personalized Massage Experience:▼ Mini cycle bike is designed for both on floor for leg exercise or on desk for arm exercise. This pedal exerciser fit offer low impact for light arm, shoulder leg and knee recovery exercise. Each pedal has 20 built-in massage point for foot and hand stimulation massage, exercise peddler bike helping to improve blood circulation and physical mobility, thereby enhancing overall health.",
    product_price: 59.99,
    category: "Exercise"
)

p31.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/bike.jpg"),filename: "bike.jpg")


star_wars_characters = [
    "Luke Skywalker",
    "Princess Leia",
    "Han Solo",
    "Darth Vader",
    "Obi-Wan Kenobi",
    "Yoda",
    "R2-D2",
    "C-3PO",
    "Chewbacca",
    "Emperor Palpatine",
    "Boba Fett",
    "Lando Calrissian",
    "Padmé Amidala",
    "Mace Windu",
    "Darth Maul",
    "Rey",
    "Finn",
    "Kylo Ren",
    "Poe Dameron",
    "BB-8"
].shuffle

20.times do 

    User.create!({
        username: star_wars_characters.pop,
        email: Faker::Internet.unique.email,
        password: 'password'
    })

end 


p_ids = (1..31).to_a

user_ids = (1..20).to_a


100.times do 
    user_id = user_ids.sample
    p_id = p_ids.sample

    next if Review.exists?(user_id: user_id, product_id: p_id)

    title = Faker::Lorem.sentence
    body = Faker::Lorem.paragraph
    rating = rand(1..5)


    Review.create!(
        title: title,
        body: body,
        rating: rating,
        user_id: user_id,
        product_id: p_id
      )

end 


puts 'Finished'