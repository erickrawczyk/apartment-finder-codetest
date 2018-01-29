const generateTemplate = (listing) => `
    <div class="card">
        <img src="/img/${listing.image_id}.jpg" />
        <h1>${listing.address}</h1>
        <p>${listing.bedrooms} beds, ${listing.bathrooms} baths</p>
        <b>$${listing.price}</b>
    </div>
`;

export const render = (listings) => {
    document.getElementById('root').innerHTML = listings.map(generateTemplate);
}

export const renderError = (err = 'Error processing request') => {
    document.getElementById('root').innerHTML = `
        <div>${err}</div>
    `;
}