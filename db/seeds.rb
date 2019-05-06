# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

liz = User.create!(username: "liz", email: "liz@gmail.com", password_digest: "123")
juniper = User.create!(username: "juniper", email:"juniper@gmail.com", password_digest: "456")
flora = User.create!(username: "flora", email: "flora@gmail.com", password_digest: "789")

Plant.create!(name: "Monstera", description:, size: "medium", light: "Bright indirect. Thrives in bright to medium indirect light. Not suited for intense, direct sun.", water: "About every 1-2 weeks", humidity: "Any", image: "https://i.imgur.com/VwFN3aW.jpg", user: liz)
Plant.create!(name: "Pilea", description:, size: "small", light: "Bright direct. Thrives in bright direct light, but can tolerate bright to medium indirect light.", water: "weekly", humidity: "Normal to Humid", image: "https://i.imgur.com/A4a6Hfr.jpg", user: liz)
Plant.create!(name: "Philodendron", description:, size: "small", light: "Medium indirect. Thrives in medium indirect light, but can tolerate low indirect light.", water: "weekly", humidity: "Any", image: "https://i.imgur.com/Npgpaz2.jpg", user: juniper)
Plant.create!(name: "Jade Pothos", description:, size:, light: "Low to medium indirect. Thrives in medium to low indirect light. Not suited for intense, direct sun.", water: "weekly", humidity: "Any", image: "https://i.imgur.com/dBsqT5F.jpg", user: juniper)
Plant.create!(name: "Aloe Vera", description:, size: "large", light: "Bright direct. Thrives in bright direct to bright indirect light.", water: "About every 2-3weeks in full sun", humidity: "Normal to Dry", image: "https://i.imgur.com/AD3MW1n.jpg", user: flora)
