puts "Seeding Users..."
u1 = User.create(username: "Test1", password:"123", password_confirmation:"123") 
u2 = User.create(username: "TestA", password:"abc", password_confirmation:"abc")
u3 = User.create(username: "Test3", password:"321", password_confirmation:"321")


puts "Seeding Locations..."
l1 = Location.create(lat: 40.74757,lng: -73.91255,name: "Home", user_id: u1.id)
l2 = Location.create(lat: 40.7053,lng: -74.0139,name: "School", user_id: u2.id)
l3 = Location.create(lat: 44.975652,lng: -93.260845,name: "Klarna Corp", user_id: u3.id)
# l4 = Location.create(lat: ,lng: ,name: "")
# l5 = Location.create(lat: ,lng: ,name: "")

puts "Seeding Reactions..."
r1 = Reaction.create(content: "Ewww This spot again!?" , user_id: User.first.id , location_id: Location.first.id)
r2 = Reaction.create(content: "Somebody's Poisoned the water hole!", user_id: User.first.id , location_id: Location.first.id)
r3 = Reaction.create(content: "Cleanup En-Route!", user_id: User.last.id , location_id: Location.last.id)



puts "Finished Seeding the Database!!!"