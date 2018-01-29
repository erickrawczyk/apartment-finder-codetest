const express = require('express');
const app = express();

const listingFilter = require(__dirname + '/listing-filter');
const LISTINGS = require(__dirname + '/listings.json');

const PORT = process.env.PORT || 3000;

// serve static files (parcel bundle and images)
app.use(express.static(__dirname + '/dist'));
app.use('/img', express.static(__dirname + '/public/img'));

// define listings api
app.get('/api/listings', (req, res) => {
    return res.send(listingFilter(LISTINGS, req.query))
})

// hey, listen! 🧚‍♀️
app.listen(PORT, (err) => {
    if (err) {
        return console.error(`Error starting server on port ${PORT}:`, err)
    }
    console.log('Server listening on port', PORT);
});