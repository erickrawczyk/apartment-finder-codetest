# Apartment Finder

For this challenge you will be creating an apartment finder app that consumes a custom api and returns a grid listing of apartment listings in Ann Arbor, MI. This is a test of basic front end proficiency including HTTP requests, CSS layouts, and JavaScript knowledge.

## Instructions
- Clone this repository and complete the challenge according to the [specifications](#specifications) below
- Once finished, open a pull request with your changes, and notify us via email that your code has been submitted

## Prerequisites
- [Node.js](https://nodejs.org/en/) v8.0+
- [Yarn](https://yarnpkg.com/en/docs/install) v1.3+ or npm v5.0+

## Environment
- `yarn start`
    - Starts the development server. This will serve the contents of the `/dist` directory on http://localhost:3000 and allow you to access api routes at http://localhost:3000/api/{path} and images at http://localhost:3000/img/{path}
- `yarn watch`
    - Builds and bundles the contents of the `/public` folder into the `/dist` folder and watches for changes

## Specifications
- Read the[API documentation](#api-documentation) section to learn about the apartment listing API
- Build a UI that allows users to filter the available apartments. There should be options for:
    - Maximum Price
    - Number of Bedrooms
    - Number of Bathrooms
- The matching apartments should be rendered in the results area. You must include these fields (if available for the record):
    - Building Image
    - Building Name
    - Building Address
    - Number of Bedrooms
    - Number of Bathrooms
    - Price
- The results should be rendered in a grid format and be visually appealing, styled logically, and fully responsive for mobile devices


## Notes
- While not necessary, you may use React or another library/framework to complete this project
- You are encouraged to use ES6+ JavaScript. Babel is included in this project, and can be used with `yarn watch`
- You may use jQuery or other dependencies, but please include an explanation of new dependencies in your PR
- You do not need to edit any files in the `/server` folder, but it's not off limits

## API Documentation
### GET `/api/listings`
> returns an array of apartment listings

#### Parameters
| Parameter | Default | Description |
|-|-|-|
| `limit` | 10 | The number of results returned  |
| `offset` | 0 | The number of results to offset |
| `bedrooms` | | Number of bedrooms |
| `bathrooms` | | Minimum number of bathrooms |
| `price` | | Maximum price  |

#### Response
| Property | Type |
|-|-|
| `bedrooms` | `Number` |
| `price` | `Number` |
| `bathrooms` | `Number` |
| `address` | `String` |
| `city` | `String` |
| `state` | `String` |
| `building_name` | `String` |
| `image_id` | `Number` |


**Example**  
GET `/api/listings?bedrooms=1&price=2000&limit=1`
```json
[
    {
        "bedrooms": 1,
        "price": 1600,
        "bathrooms": 1,
        "address": "545 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "High Street Apartments",
        "image_id": 146534455
    }
]
```
