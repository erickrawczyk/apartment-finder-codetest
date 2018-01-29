const listingFilter = require(__dirname + '/listing-filter');
const LISTINGS = require(__dirname + '/listings.json');

module.exports = function listingHandler(req, res) {
    return res.send(listingFilter(LISTINGS, req.query))
}

