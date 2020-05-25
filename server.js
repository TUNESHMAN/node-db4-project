// Import the prebaked middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// Make use of the middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

// Export the server to the outer world
module.exports = server;
