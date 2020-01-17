require "faker"

# User.create(name: "Demo User", email: "demo_user@email.com", password: "password", biography: "Have a nice day!")

# 50.times do 
#   User.create(
#     name: Faker::Name.unique.name,
#     email: Faker::Internet.email,
#     password: "password",
#     biography: Faker::Movies::BackToTheFuture.quote
#   )
# end

# 100.times do 
#   User.create(
#     name: Faker::Name.unique.name,
#     email: Faker::Internet.email,
#     password: "password",
#     biography: Faker::Quote.most_interesting_man_in_the_world
#   )
# end

# (1..100).each do |i|
#   2.times do
#     Reward.create(
#       project_id: i,
#       minimum: rand(1..10) * 10,
#       quantity: rand(5..20) * 10,
#       title: Faker::Cosmere.metal
#       description: Faker::Marketing.buzzwords
#       estimated_delivery: Faker::Date.forward(days: 90)
#     )
#   end
# end


# 1000.times do 
#   Pledge.create(
#     reward_id: rand(1..100),
#     project_id: rand(1..100),
#     backer_id: rand(1..200),
#     amount: rand(100..500)
#   )
# end
