const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {    //app.get is a http request. It takes in the route and a callback function with two arguments, req and res. In order to send data back to the client, you have to use a method like res.send
    return res.send("hello")
});

console.log(`Server listening on local host ${port} `)
app.listen(port)