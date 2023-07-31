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
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    
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
    description: "Great workout dumbells for whenever the exercise moment hits.",
    product_price: 9.99,
    category: "Exercise"
)

p1.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/dumbell.jpg"),filename: "dumbell.jpg")

p2 = Product.create!(
    product_name: "Hand Dinosaur!!",
    description: "For when you need a hand puppet showm from the prehistoric era.",
    product_price: 6.99,
    category: "Recreation"
)

p2.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/dinosaur.jpg"),filename: "dinosaur.jpg")


p3 = Product.create!(
    product_name: "Scented Candle",
    description: "For when your room needs that specific ooomph, our candle can bring the most diverse smells to your room. May not be suitable for everyone.",
    product_price: 15.99,
    category: "Home"
)

p3.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/candle.jpg"),filename: "candle.jpg")


p4 = Product.create!(
    product_name: "Stylish Chicken Handbag",
    description: "Our bag offers unique styling that only the most enthusiastic fashionista's can appreciate.",
    product_price: 1099.99,
    category: "Fashion"
)

p4.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/chickenbag.jpg"),filename: "chickenbag.jpg")

p5 = Product.create!(
    product_name: "Coco Dunk On Em'",
    description: "For when the hot coco isnt enough. Does the day to day coffee not do it for you. Get this sporty add on to your favorite beverage, coco sold separately.",
    product_price: 20.99,
    category: "Home"
)

p5.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/coco.jpg"),filename: "coco.jpg")

p6 = Product.create!(
    product_name: "Danny Devito Sequin Pillow",
    description: "Ever felt like you were missing some Devito from your life? Look no further, this pillow will change on swipe, have the man himself give you a glowing glare.",
    product_price: 49.99,
    category: "Home"
)

p6.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/danny.jpg"),filename: "danny.jpg")

p7 = Product.create!(
    product_name: "Aquatic Formal Wear",
    description: "Ever felt our of place amoungst a group of aquatic elites? Well this garmet will elevate your presence, known as an important addition to a night out, this piece will help you stand out and swim ahead. You will be the big fish!",
    product_price: 2000.99,
    category: "Apparel"
)

p7.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/mask.jpg"),filename: "mask.jpg")

p8 = Product.create!(
    product_name: "Sebas The Earbuddy Crab",
    description: "We all need a helpful crustacean to elevate our sound. Known for his diligence with a certain mermaid Sebas will uphold your sound.",
    product_price: 2.00,
    category: "Decor"
)

p8.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/crab.jpg"),filename: "crab.jpg")

p9 = Product.create!(
    product_name: "PowerPillow, head in the clouds",
    description: "Ever had enough of the outside world, powernaps not comfy enough? Well this pillow will set you straight. Feel like you are drowning in your matress, wherever you go!",
    product_price: 79.99,
    category: "Comfort"
)

p9.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/ostrichpillow.jpg"), filename: "nappillow.jpg")

p10 = Product.create!(
    product_name: "Hamburger Phone",
    description: "For when ordinary calls lack cheesyness, this hamburger phone can send you to a world of pre 2010's modernism when phones had more beef.",
    product_price: 502.99,
    category: "Electronics"
)

p10.photo.attach(io: URI.open("https://jungle-dev.s3.us-east-2.amazonaws.com/JungleImgs/cheesyphone.jpg"),filename: "cheesyphone.jpg")


 