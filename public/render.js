const generateTemplate = (listing) => {
    const studio = 'Studio';
    const bedrooms = `${listing.bedrooms} Bed${listing.bedrooms > 1 ? 's' : ''}`
    const buildingName = listing.building_name && listing.building_name !== listing.address ? `<b>${listing.building_name}</b> <br />` : ''

    const background = listing.image_id ? `background-image: url('/img/${listing.image_id}.jpg')` : 'background-color: gray';

    return `
        <div>
            <div class="uk-card uk-card-default uk-card-hover">
                <div class="uk-card-media-top" style="${background}">
                    ${listing.image_id ? '' : '<p class="no-image-text">No Image Available</p>' }
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">
                        ${buildingName}
                        ${listing.address}
                    </h3>
                    <p>
                        ${listing.bedrooms === 0 ? studio : bedrooms},
                        ${listing.bathrooms} bath${listing.bathrooms > 1 ? 's' : ''}
                    </p>
                    <b>$${listing.price}</b>
                </div>
            </div>
        </div>
    `;
}

export const render = (listings, { append = false } = {}) => {
    const $results = document.getElementById('results');
    const $grid = document.getElementById('results-grid');
    const $noResults = document.getElementById('no-results')
    const $loadMoreBtn = document.getElementById('load-more');

    const listingsTemplate = listings.map(generateTemplate).join('');

    // handle empty results
    if (!listings.length) {
        $loadMoreBtn.disabled = true;
        $noResults.style.display = 'block';
        if (!append) $results.innerHTML = '';
        return;
    }

    $loadMoreBtn.disabled = false;
    $noResults.style.display = 'none';

    if (append) {
        $grid.innerHTML += listingsTemplate;
    } else {
        $results.innerHTML = `
            <div id="results-grid" class="uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match" uk-grid>
                ${listingsTemplate}
            </div>
        `
    }
}

export const renderError = (err = 'Error processing request') => {
    document.getElementById('results').innerHTML = `
        <div>${err}</div>
    `;
}