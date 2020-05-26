// Import the prebaked middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// Bring the router to the server to be accessed
const recipeRouter = require("./recipe/recipeRouter");

// Make use of the middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);
server.use("/recipe", recipeRouter);

// Create a dummy endpoint
server.get("/", (req, res) => {
  res.json(`<h2>Welcome to recipe endpoint</h2>`);
});

// If the endpoint is invalid
server.get("*", (req, res) => {
  res.send(`message: Invalid endpoint`);
});

// This is a logger middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString}] ${req.method} ${req.url} from ${req.get(
      "Origin"
    )}`
  );
  next();
}

// Export the server to the outer world
module.exports = server;
