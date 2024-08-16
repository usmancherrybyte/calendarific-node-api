# Node.js Back-End Test

## Scenario

The goal of this project is to create a simple RESTful API using Node.js that communicates with the Calendarific API to fetch holiday data for a specific country and year. This API is intended to be used by a front-end application, such as one built with React JS.

## API Endpoints

### 1. Fetch Holidays

**Endpoint:** `GET /api/holidays?country=PAK&year=2024`

**Description:** Fetch holidays for the specified country and year.

**Parameters:**

- `country` (required): Country code (e.g., `PAK` for Pakistan).
- `year` (required): Year for which holidays are requested.

**Response:**

- JSON object containing holiday data for the specified country and year.

### 2. Fetch Supported Countries

**Endpoint:** `GET /api/countries`

**Description:** Fetch the list of supported countries from the Calendarific API.

**Response:**

- JSON object containing the list of supported countries.

## Data Handling

- **Fetch Holiday Data:** Retrieve holiday data from the Calendarific API.
- **Cache Response:** Cache the response using an in-memory cache like `node-cache` or `Redis` for future requests.
- **Data Format:** Return data in JSON format that can be consumed by the React JS front-end.

## API Flow

1. **Holiday Request:**

   - Check if the data is available in the cache.
   - If data is not cached, make an API call to Calendarific, store the response in the cache, and return it.
   - If data is cached, return the cached data without making a new API call.

2. **Countries Request:**
   - Fetch the list of supported countries directly from the Calendarific API.

## Setup

1. **Clone the Repository:**

   git clone https://github.com/usmancherrybyte/calendarific-node-api

## navigate to Project Directory:

cd calendarific-node-api

## Install Dependencies:

npm install

## Run Proejct:

npm start

## Unit Testing:

npm test
