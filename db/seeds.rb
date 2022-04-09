# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Locations..."
l1 = Location.create(lat: 40.74757,lng: -73.91255,name: "Home")
l2 = Location.create(lat: 40.7053,lng: 74.0139,name: "School")
l3 = Location.create(lat: 44.975652,lng: -93.260845,name: "Klarna Corp")
# l4 = Location.create(lat: ,lng: ,name: "")
# l5 = Location.create(lat: ,lng: ,name: "")


puts "Finished Seeding the Database!!!"