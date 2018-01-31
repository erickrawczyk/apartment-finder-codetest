module.exports = function filterListing(listings, { offset = 0, limit = 10, bedrooms, bathrooms, price }) {
    const intLimit = parseInt(limit, 10);
    const intOffset = parseInt(offset, 10);
    
    if (bedrooms) {
        listings = listings.filter(listing => listing.bedrooms === parseInt(bedrooms, 10));
    }

    if (bathrooms) {
        listings = listings.filter(listing => listing.bathrooms >= parseInt(bathrooms, 10));
    }
    
    if (price) {
        listings = listings.filter(listing => listing.price <= parseInt(price, 10));
    }

    if (listings.length > intLimit - intOffset) {
        const upperLimit = intOffset + intLimit
        const lowerLimit = intOffset;
        listings = listings.slice(lowerLimit, upperLimit);
    }

    return listings;
}