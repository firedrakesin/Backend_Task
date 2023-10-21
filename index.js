const express = require('express');             //Imported Express and created an instance of the application.
const app = express();
const cors = require('cors');                   //Enabled CORS (Cross-Origin Resource Sharing) for your server.
const postRoutes = require('./routes/post');    // Import the routes from the post file
require('dotenv').config();                     //Loaded environment variables from a .env file using dotenv.


app.use(cors());
app.use(express.json());                        //Used express.json() to enable JSON parsing for incoming requests.
app.use('/post', postRoutes);                   // Use the '/post' prefix for the POST APIs


//Start the server, specifying the port as either from the environment variable or a default value.
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
