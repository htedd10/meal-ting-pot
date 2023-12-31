# Meal-ting Pot

<p>Meal-ting Pot is an all-in-one platform that caters to both aspiring chefs and food enthusiasts. Whether you're eager to showcase your culinary flair to the world or seeking to broaden your palate, our website and social media app have got you covered. Join our community of passionate foodies and embark on a journey of discovering new flavors and culinary skills!</p>

## Live Demo

View a live demo of this project here: <a> https://bidoof_supremacy.gitlab.io/meal-ting-pot/ </a>

Caprover's database falls asleep when inactive so you will be unable to signup/login for a few minutes. Please try again after waiting.

## Key Features - MVP
1. Users are able to sign up for chef or customer accounts, log in, and log out.
2. Logged in customer viewers can view available chefs and filter by nationality.
3. Logged in customer users can view a Chef's page and profile with all their dishes.
4. Logged in customer users can add or remove chef dishes to their cart.
5. Logged in customers can submit their carts which will then show up in their order history.
6. Logged in customer users can view their order history.
7. Logged in customer users can view the about us page.
8. Logged in chef users can create and edit their profiles.
9. Logged in chef users can add/edit/change availability of dishes.
10. Logged in chef users can confirm, mark ready for pickup, complete, or decline orders and view order history.

## Design
- [Wireframe](docs/wireframe.md)
- [API](docs/API.md)
- [Schemas](docs/Schemas.md)

## Installation

1. Fork repository at: <a>https://gitlab.com/bidoof_supremacy/meal-ting-pot</a>
2. Clone repository to local by running: `git clone https://gitlab.com/bidoof_supremacy/meal-ting-pot.git`
3. Create local database by running: `docker volume create meal-ting-pot-data`
4. Build images and containers by running: `docker compose build`
5. Bring up the containers by running: `docker compose up`

-Access the front-end UI through browser at: <a>http://localhost:3000/<a>

-Access the FastAPI backend at <a>http://localhost:8000/docs</a>

## Maintainers

- @htedd
- @Jacobdub
- @Janarbo
- @derekwangg
