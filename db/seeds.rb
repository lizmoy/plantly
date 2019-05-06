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

monstera = Plant.create!(name: "Monstera", description: "Monstera deliciosa is a species of evergreen tropical vine", size: "medium", light: "Bright indirect. Thrives in bright to medium indirect light. Not suited for intense, direct sun.", water: "About every 1-2 weeks", humidity: "Any", image: "https://i.imgur.com/VwFN3aW.jpg", user: liz)
pilea = Plant.create!(name: "Pilea", description: "Pilea peperomioides (Urticaceae) is an Asiatic perennial herb that is native to Yunnan Province in Southern China at the foot of the Himalayas.", size: "small", light: "Bright direct. Thrives in bright direct light, but can tolerate bright to medium indirect light.", water: "weekly", humidity: "Normal to Humid", image: "https://i.imgur.com/A4a6Hfr.jpg", user: liz)
philodendron = Plant.create!(name: "Philodendron", description: "Philodendron is a genus of herbaceous evergreen tropical plants which belongs to the aroid family Araceae.", size: "small", light: "Medium indirect. Thrives in medium indirect light, but can tolerate low indirect light.", water: "weekly", humidity: "Any", image: "https://i.imgur.com/Npgpaz2.jpg", user: juniper)
jade = Plant.create!(name: "Jade Pothos", description: "Epipremnum aureum, or Pothos, is a tropical aroid vine in the family Araceae.", size: "medium", light: "Low to medium indirect. Thrives in medium to low indirect light. Not suited for intense, direct sun.", water: "weekly", humidity: "Any", image: "https://i.imgur.com/dBsqT5F.jpg", user: juniper)
aloe = Plant.create!(name: "Aloe Vera", description: "Originates from North Africa and the Middle East. Aloe generates special protein-sugars and sugar-alcohols that take the place of water when the plant dries out, which prevents oxidative damage by stabilizing the plant’s DNA and proteins. ", size: "large", light: "Bright direct. Thrives in bright direct to bright indirect light.", water: "About every 2-3weeks in full sun", humidity: "Normal to Dry", image: "https://i.imgur.com/AD3MW1n.jpg", user: flora)

date1 = Date.new(2018, 12, 10)

Log.create!(log_date: date1, cared_for: "yes", condition: "good", description: "healthy", plant: monstera)