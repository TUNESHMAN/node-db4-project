// Bring in the server
const server = require("./server");

// Choose a Port
const PORT = process.env.PORT || 9000;

// listen to the server
server.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
