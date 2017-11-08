const http = require('http');

const PORT = 7000;

const handleRequest = (request, response) => {

  response.end(`You are looking great! The gym is really paying off: ${ request.url }`);

}

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`You are now listening on port ${ PORT}`);

});
