# PROJECT 2 

## The project

Welcome to PinnedFiction, your gateway to discovering the real-world locations that have inspired your favorite video games and movies. Our platform allows you to explore a curated collection of places contributed by our community. From the vivid streets of a virtual city to the iconic backdrop of a memorable scene, you'll find it all here.

Immerse yourself in the intersections of imagination and reality as you explore actual places that mirror the virtual worlds you love. 

Join us in celebrating the tangible magic that brings fictional universes to life. Start your journey with PinnedFiction today!


## Structure

Our website features a user-friendly landing page where visitors can create an account and existing users can log in. 

For new users, the sign-up process is straightforward. They provide essential information to create an account, granting them access to the site's full range of features. Returning users can seamlessly log in using their credentials. Our robust authentication system ensures their privacy and security throughout their experience.


Once logged in, users can create place entries that highlight real-life locations that have either inspired or appeared in movies, animes, mangas and/or videogames. Each place entry offers an image of the location along with a description written by the author of the entry. This blend of personal experience and multimedia engagement brings the user's memories to life and encourages visitors to plan their holidays. 

To do this, the necessary routes are the following: 

### index.routes.js
| Route | HTTP verb | Description|
| --- | --- | --- |
| / | GET | Get index route |
| /about | GET | Get about route |

### user.routes.js
| Route | HTTP verb | Description|
| --- | --- | --- |
| /signup | GET | Get signup form |
| /signup | POST | Create new user |
| /login | GET | Get login form |
| /login | POST | Login user |
| /profile/:userId | GET | Display user profile |
| /profile/:userId/edit | GET | Get edit form |
| /profile/:userId/edit | POST | Update user profile |

### place.routes.js
| Route | HTTP verb | Description|
| --- | --- | --- |
| /places-list | GET | Get list of all places |
| /places/:placeId | GET | Get details of place |
| /create | GET | Get new place form |
| /create | POST | Create new place |
| /edit/:placeId | GET | Get edit form |
| /edit/:placeId | POST | Update place |
| /delete | POST | Delete place |


*THE REST OF THIS FILE WILL BE COMPLETED AS THE PROJECT IS DEVELOPED.* 