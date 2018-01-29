import './main.css';
import { render, renderError } from './render';

fetch('/api/listings?limit=25')
    .then(res => res.json())
    .then(render)
    .catch(renderError)