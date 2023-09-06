# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


#this is for example once you migrate 


#after eveery user input 

# mike = User.Create!(username: 'madz', password: 'password')

# to every user input 



# db/seeds.rb
require "open-uri"

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    
    Cart.destroy_all
    
    User.destroy_all

    User.create!(
      username: 'juan',
      email: 'juan@email.com',
      password: 'password'
    )
  
    puts "Done!"
  end

  # json.extract! product, :id, :product_name, :description, :product_price, :created_at, :updated_at


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
    category: "Decor"
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


 