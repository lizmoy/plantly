# Plant.ly

is an app that helps you manage the care regimen of your indoor houseplants. 
Find it [here](https://plantly.surge.sh/)

### User Stories
* As a user, I want to add a plant to my dashboard.
* As a user, I want to see all my plants in my dashboard.
* As a user I want to see the care details for any plant in my account.
* As a user I want to update the details of any plant to document changes in light, water & humidity.
* As a user I want to get rid of plants from my account.

### Setup
To run this app locally:
* Fork & clone this repo
To get the server going, run in your command line:
* bundle install
* rails db:create
* rails db:migrate
* rails db:seed
To get the client going, cd into the client folder and run:
* npm i
* npm start

### Wireframes
A selection of my original wireframes
![homepage wireframe](https://i.imgur.com/1VsnAiC.png)
![plant dashboard](https://i.imgur.com/cKru6Sz.png)

### ERD
![erd](https://i.imgur.com/e4VJ366.png)

### Code Snippet
To save time from making another fetch call to my database, I find the individual plant in the plants array by matching params for the plant id and storing it in a variable I can then use to access the object properties.
```
const { plants, match: { params: { id } } } = this.props
		const selectedPlant = plants.find(plant => {
			return plant.id === parseInt(id)
		})
    
```
By constructing the method in my users controller with "include: :plants", I'm able to get plants from the users endpoint.
```
def show
    render json: @user, include: :plants
end
```
