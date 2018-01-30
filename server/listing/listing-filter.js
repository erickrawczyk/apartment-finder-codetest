module.exports = function filterListing(listings, { offset = 0, limit = 10, bedrooms, bathrooms, price }) {
    
    if (bedrooms) {
        listings = listings.filter(listing => listing.bedrooms === parseInt(bedrooms, 10));
    }

    if (bathrooms) {
        listings = listings.filter(listing => listing.bathrooms >= parseInt(bathrooms, 10));
    }
    
    if (price) {
        listings = listings.filter(listing => listing.price <= parseInt(price, 10));
    }

    if (listings.length > limit - offset) {
        const upperLimit = parseInt(offset, 10) + parseInt(limit, 10);
        const lowerLimit = parseInt(offset, 10);
        listings = listings.slice(lowerLimit, upperLimit);
    }

    return listings;
}