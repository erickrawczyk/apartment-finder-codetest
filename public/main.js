import './main.css';
import { render } from './render';

fetch('/api/listings?limit=25')
    .then(res => res.json())
    .then(render)
    .catch(renderError)