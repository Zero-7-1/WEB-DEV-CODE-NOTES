/*
We will see here about HTTP module which comes built in with node to create server and 
dealing with request and response.. 

*/

import http from 'http';
const PORT = 8000;

/* 
Q. CREATE A SIMPLE NODE.JS SERVER WITHOUT ANY FRAMEWORK TO SEND A SIMPLE STRING MESSAGE 
   TO CLIENT. EXPLAIN HOW THIS SIMPLE SERVER WORKS IN BACKGROUND. 
*/
const server = http.createServer(
    (req, res) => {
        console.log(`Request received: ${req.method}`);
        res.write('Hello From Node')
        res.end();
    }
);
/*
- > In http module we have createServer() method that creates an HTTP server instance that 
    can listen for incoming requests and send responses.

- > Here when a user goes to specified URL or localhost that's a GET request from client 
    to server. 

- > A callback function with parameters req and res (which are actually objects provided by
    node to handle request and response) is passed to this createServer() method. 

- > Our server's callback function is executed for every incoming request, in this case
    that simple GET request. 

- > The write() method of res here is used to send some data specifically strings to the 
    client and the end() method of res tells client that no more data would be sent, 
    signals end response.  

- > Its better to avoid using req if we plan not to use it to avoid unused variable warning
    or we could make use of it like console loging which request method and its url is sent
    by client. 
*/

server.listen(PORT, 
    (err) => {
        if (err) {
        console.log(`Server ran into some problem`)
        }   console.log(`Server is running on port ${PORT}`); 
    }
); 

/*
- > listen() is another method provided by the http module which listens for incoming 
    requests on specified port or host. It tells the server to actively wait and handle 
    incoming requests. It is esstential for starting the server. 

- > Here we have optional callback function which logs if server starts succesfully.

- > Additionally we had a if else block for error handling 
*/