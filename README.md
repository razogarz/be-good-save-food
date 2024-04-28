# be-good-save-food
SpotOn take home project.

## Project Description
This app was designed to help you save food while recommending healthy meals recipes. Upon entering list of ingredients you have, you will be given a number of recipes propositions that you can make with those ingredients. The app will also provide you with a list of ingredients that you are missing to make the recipe.

## How to run the app
##### Client
1. Clone the repository
2. `cd client` and run `npm install`
3. Run `npm run dev` to start the client (it should be running on `http://localhost:5173/`)

##### Server
1. Open a new terminal
2. `cd server` and run `pip install -r requirements.txt`
3. Run `python manage.py runserver` to start the server (it should be running on `http://localhost:8000/`)

For any dependency issues that could arise, I suggest creating a virtual environment for server, like conda (server is on python 3.12):
- `conda create -n myenv python=3.12`
- `conda activate myenv`
- `pip install -r requirements.txt`

And you are ready to go! Open your browser and go to `http://localhost:5173/` to start using the app.

##### You can also run tests for the client with `npm run test` in `/client` directory