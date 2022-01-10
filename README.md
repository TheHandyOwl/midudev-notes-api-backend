# midudev-notes-api-backend

This is an example of a simple backend with Heroku + Mongoose + Atlas + Sentry.

Custom variables (.env file):
-
```
DBNAME = yourDBName
DBPASSWORD = yourDBPassword
DBUSER = yourDBUser
```

Install:
-
* git clone https://github.com/TheHandyOwl/midudev-notes-api-backend.git
* cd midudev-notes-api-backend
* Create your own '.env' file with your custom values (variables)
* Don't forget to check / change your DB uri connection
* npm install
* npm run dev (to run with nodemon) or ...
* npm start (to run with node as default)

Heroku DEMO:
-
Wait a few seconds if the server is down until it reboots:
https://midudev-notes-api-backend.herokuapp.com/

Paths:
* GET /
* GET /api/notes
* GET /api/notes/:id
* GET /images/logo.png
* POST /api/notes
* PUT /api/notes/:id
* DELETE /api/notes/:id
