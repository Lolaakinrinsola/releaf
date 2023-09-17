# Search Filter

This project filters an array based on the lastname , firstname and address .

## Connecting a database
Here is how to install the project on your local machine:

- Install Node.js and npm (Node Package Manager) on your system.
- Clone the your project.
- Install dependencies using npm install.
- Install necessary dependencies, like Express and Mongoose.
- create a config.env file in the project directory
- Add your database link in the file and port like this :
  ```
  PASSWORD=*******
  DATABASE=*******
  PORT=3005
  ```
- go to your terminal in your project directory and run this script to populate your database with data

```
node import-data.js --import
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server from the terminal

### `npm test`

Launches the test runner in the terminal which uses mocha

## Operations
### Query a search
To search for a user, we would be using postman for testing.
- Use your localhost:3005/suggestions and the request set to GET.
- The query should be q.
  ```
  localhost:3005/suggestions?q=john
  ```
- An array of data containing the word should be displayed

### Built with
- [Nodejs](https://nodejs.org/en) -open-source, server-side JavaScript runtime environment that allows developers to build scalable and efficient network applications.
- [Mongodb](https://www.mongodb.com/) -open-source NoSQL database management system that stores data 
- [Express](https://expressjs.com/) -framework for nodejs
- [Moncha](https://mochajs.org/) -for automated tests

### Deployment
It can be deployed on render as a web service

### Versioning
I used git for versioning 

