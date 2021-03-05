// to create a server with node
// we need to require core module http
const http = require("http");

// http a une methode create_server
http
  .createServer((request, response) => {
    response.json(`<h2>hello Mohamed</h2>`);
  })
  .listen(5000);
