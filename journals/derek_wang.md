## March 27, 2023
Today we presented our design ideas to get some instructor feedback. Paul gave us some very helpful input on making our endpoints more restful and cleared up some of the questions we had regarding the shape of our data for our schema. We also made some changes to our design regarding account creation and how to become a chef as well as how chefs will determine their active status on their profile rather than setting a time on dishes. We also added a clarifying status of "ready for pickup" to an order.

## March 28, 2023
Today we finished writing out the issues in our trello-board and mapping out our database schema. The current iteration of our issues are very very rough and will likely be subject to change down the line. We just wanted to have some idea of the task breakdown and workload for each page. We will likely have to break things out into their own tickets and provide more technical descriptions down the line, as well as create some more tickets. Database schema is pretty much done, some murkiness regarding the chef profile but I think we will figure it out once we start putting things together and seeing how they need to interact.

## March 29, 2023
Today we were able to get our PostgreSql database set up in the docker compose file, get a table set up, connected with beekeeper, and wrote our first endpoint. We decided that since it was this early in the project and everyone would still need to know how to do all this stuff that I would drive for today and we would have three navigators. This definitely helped with my nerves and I could rely on my groupmates to spot any mistakes and we could have discussion over certain items or if we got stuck. We followed along with the learn content from curtis to set up the database in our yaml file so that it was connected to our volume. We definitely spent too much time getting beekeeper installed and it turned out to be a simple click of an .exe file instead of having to fork it and do a bunch of crazy stuff(that's for if we actually wanted to do dev work on the app itself). Writing our migrations for the databases and writing queries in beekeeper went pretty smoothly afterwards. We also were able to set up the routers and queries for menu_items and were able to make a create endpoint for menu items with all of our classes set up. Ran into a few hiccups on the way but were able to work through them, but then we got this weird interaction where everything looked right and was posting to the database properly, but we kept getting an error code 400 for improper request. It kept spitting the error code at us for no reason(everything was posting to the database with all fields). The solution ended up being a docker rebuild so that the console would give us a 200 response.

## March 30, 2023
Today we worked on auth with Ted driving and the rest of us navigating. We installed jwtdown in our requirements.txt to use for the authentication part and started following along with curtis' video(while changing stuff to fit our design). Ran into an issue where we were getting a 401 error and had to rename some things to match what the server was expecting from us to fix it. We also got stuck for a while with attribute errors following along with curtis, until we realized the demo was for mongo db and wouldn't work for us in PostgreSql since the data is stored and organized differently with things being stored in dictionaries vs documents(i think?). We created the accounts routers and queries and were able to get signup/signin/logout going. Also were able to figure out how to link the account data id to the chef_id for menu item creation so that only logged in users can create menu items. To do this we removed chef_id from our MenuItemIn and had it automatically try and pull the id from the account data to complete that field.

## April 03, 2023
Today we worked on getting the rest of our migrations together as well as writing the SQL queries in beekeeper to help visualize how we would join the different tables. It got a little crazy with the orders table and having to go into the shopping cart id to get to the shopping cart item then grabbing the menu item to get the name and price, but we were able to struggle a bit and get it figured out. Definitely rewarding to get that done and tomorrow we'll get started on some more endpoints.

## April 04, 2023
Today we split off into working on our own backend enpoints. Started on the crud for menu items. Fastapi is definitely different than django, but still kind of similar. Following curtis's tutorial and having my own repo from following along before during the exploration definitely helps a lot. Very cool to be able to test directly in the docs in the browser instead of needing to use and set up insomnia.

## April 05. 2023
Just continued working on my menu item routes and queries, finished them up and committed them and also helped out with some debugging.

## April 06, 2023
Needed to make some revisions to menu items to include the status boolean for each menu items since we can't actually "delete" them or the order history that is dependent on them would get messed up. Instead set a boolean so that only available items will be displayed. Also added an additional endpoint for a get menu items using chef id for customers as well as protection for our endpoints.

## April 07, 2023
Started working on some frontend auth together. Using redux and definitely pretty challenging. Was able to use some of the resources we had to throw together a simple login page and get it working.

## April 11, 2023
Today we got together for a little bit over the break to keep chipping away at front-end auth. Still pretty lost with redux, but we're getting through it together and using the docs and some online resources to help out.

## April 12, 2023
Just very briefly finished up our frontend auth today and it seems like everything is working. Started a little bit on the menu items components.

## April 17, 2023
We decided to table the front end components for now and get started on deployment as a team, since it's still fresh in our minds after Rosheen's lecture. Definitely kind of cool to think that we're pretty close to our project being live outside of our own localhost and system. Seems like deployment requires a lot of attention to detail though with needing multiple variables to match at various stages, or the whole thing just goes wrong. Started getting some CORS issues, but apparently they're not actually CORS issue related but other things wrong within our deployment. Kind of frustrating and misleading since we spent so much time trying to hunt down where the cors issue is coming from and digging pretty deep into some online resources. Thought we were pretty close to finishing up deployment yesterday, but guess not(haha). At least now we know where to try and debug.

## April 18, 2023
We spent the day clearing out all of the issues in our deployment logs, also realizing that we needed to actually create our dockerfile for deployment and can't use the dev one (duh), but still getting a cors issue from gitlab instead of our project url. Kind of weird, and frustrating. We've pretty much exhausted everything and are still stuck. Was really hoping to get deployment resolved early/today but doesnt seem like that's in the cards for us...

## April 19, 2023
THANK GOD we finally got our deployment to work. Had some problems with our naming in our gitlab yml file matching urls, but it works!! Finally starting on some front-end components today. Gonna start hammering away at our frontend now.

## April 20, 2023
Finished up my menu item api and almost done with my menu item form, starting to kind of get the hang of redux now, feeling more comfortable with it.

## April 24, 2023
Just kept working on my components, finished up my menu item list and started on my update form.

## April 25, 2023
Finished up and pushed all of my menu item components, made some revisions with the food-type and spicy level dropdown to make it compatible with ted's component. Starting on some unit tests today.

## April 26, 2023
Finished up my unit tests and got them to pass (thank god for paul's lecture recording to walk me through it). Started with helping the group out with some debugging/functionality and edge cases. Definitely feel like I had some of the easier components so trying to help out where I can. We also tried uncommenting everything out of our gitlab yml now that we're mostly done with frontend and just seeing if everything works on our front-end. Definitely ran into some bugs that we didn't realize we had on the walkthrough, but we're tackling them all together as a team.

## April 27, 2023
Just finishing up some of our edge case coding/debugging/adding in some code for the user experience today. Also got our readme done and getting the documentation going. Spent some time cleaning up/adding some detail to my issue tickets and my merge requests.
