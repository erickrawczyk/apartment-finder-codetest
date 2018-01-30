import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css'

// loads the Icon plugin
UIkit.use(Icons);

import './main.css';
import { serialize } from './serialize';
import { render, renderError } from './render';

const api = '/api/listings';

const defaultOptions = {
    limit: 20,
    offset: 0,
    bedrooms: null,
    price: null,
    bathrooms: null,
}

let searchOptions = { ...defaultOptions };

// pagination for existing search options
function loadMore() {
    searchOptions.offset += searchOptions.limit;
    fetch(api + serialize(searchOptions))
        .then(res => res.json())
        .then(listings => render(listings, { append: true }))
        .catch(console.error)
}

// grab input values and perform search
function search(){
    const bedrooms = document.getElementById('bedroom-select').value;
    const bathrooms = document.getElementById('bathroom-select').value;
    const price = document.getElementById('price').value;

    searchOptions.offset = defaultOptions.offset;
    if (bedrooms !== '') searchOptions.bedrooms = parseInt(bedrooms, 10);
    if (bathrooms !== '') searchOptions.bathrooms = parseInt(bathrooms, 10);
    if (price !== '') searchOptions.price = parseInt(price);

    fetch(api + serialize(searchOptions))
        .then(res => res.json())
        .then(render)
        .catch(console.error);
}

// reset to original state
function reset() {
    // reset search options
    searchOptions = { ...defaultOptions };

    // reset form inputs
    document.getElementById('bedroom-select').value = '';
    document.getElementById('bathroom-select').value = '';
    UIkit.formCustom('#bedroom-select-form', {defaults: {target: true}});
    UIkit.formCustom('#bathroom-select-form', {defaults: {target: true}});
    document.getElementById('price').value = '';
    document.getElementById('load-more').disabled ;
    document.getElementById('no-results').style.display = 'block';

    // perform default fetch
    fetch(api + serialize(searchOptions))
        .then(res => res.json())
        .then(render)
        .catch(console.error)
}

// attach event listeners to ui elements
window.onload = () => {
    reset();
    document.getElementById('load-more').addEventListener('click', loadMore);
    document.getElementById('reset').addEventListener('click', reset);
    document.getElementById('search').addEventListener('click', search);
    document.getElementById('price').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
            search();
        }
    });
}
