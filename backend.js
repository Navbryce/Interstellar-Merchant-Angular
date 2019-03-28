const express = require('express');
const path = require('path')
const app = express();


// turn the dist path into an absolute path (__dirname points to backend.js directory)
const distPath = path.join(__dirname, "/dist/Interstellar-Merchant-Angular");

// Serve only the static files form the npmdist directory
app.use(express.static(distPath));
  
app.get('/', (req,res) => {
    /* Route to the angular app */
    res.sendFile(distPath + '/index.html'); //_dirname = path to app
});


/* Listen for the app on the Heroku port (if set as an env variable)
or default to 8080. */
app.listen(process.env.PORT || 8080);

