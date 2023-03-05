/* bing chat wrote this code LMFAO */

// Import express with require keyword
const express = require('express');
// Create an app by calling the express() function
const app = express();
// Define a port number
const port = 3000;
// Define a route handler for the root URL
app.get('/', (req, res) => {
  // Send "Hello World" as a response
  res.send('Hello world! This is Bing. I\'m a chat mode of Microsoft Bing search. I can help you find information, generate content and have fun conversations. Try me out!');
});
// Listen for requests on the specified port
app.listen(port, () => {
  // Log a message when the server is ready
  console.log(`Example app (by Sydney 😊) listening at http://localhost:${port}`);
});
