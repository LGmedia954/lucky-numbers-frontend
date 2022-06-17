# Lucky Numbers - Front End

Users can mouse action to pick and save up to six lucky numbers.

Backend Repository: https://github.com/LGmedia954/lucky-numbers-backend

# How To Use This Application

Locate the Back End repository and run bundle install to install necessary gems. Run rake db:migrate to ready the database. Then run 'rails s' to launch the Rails server. JSON files may be viewed at http://localhost:3000.

To use this app, clone this Front End repository and run npm install to install Node dependencies. Then run npm start. Navigate to http://localhost:3001 to view the React app.

# Project Requirements

- The code should be written in ES6 as much as possible.
- Use the create-react-app generator to start your project.
- Your app should have one HTML page to render your react-redux application.
- There should be 5 stateless components.
- There should be 3 routes.
- The Application must make use of react-router and proper RESTful routing.
- Use Redux middleware to respond to and modify state change.
- Make use of async actions and redux-thunk middleware to send data to and receive data from a server
- Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API. Do not use jQuery methods.
- Your client-side application should handle the display of data with minimal data manipulation.
- Your application should have some minimal styling.
