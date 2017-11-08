const http = require('http');

const PORT = 7500;

const handleRequest = (request, response) => {

  response.end(`Dude, chill with the 3 dollar slices, you look 3 months preggo: ${ request.url }`);

}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`You are now listening on port ${ PORT}`);

});
