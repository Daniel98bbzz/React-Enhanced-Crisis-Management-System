# Counseling Session Management API
## Overview
This project is a web service designed to manage counseling sessions. It allows for
the creation, reading, updating, and deletion of session information, making it an
essential tool for crisis counseling management. The service facilitates easy
tracking and adjustments of session details.
## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- Body-parser for request parsing
- Dotenv for environment variable management
- Winston for logging
## Getting Started
### Prerequisites
- Node.js
- MongoDB account and cluster
### Installation
1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the project directory.
3. Create a `.env` file in the root directory with the following variables:
- `DB_HOST` = Your MongoDB cluster host
- `DB_USER` = Your MongoDB user
- `DB_PASS` = Your MongoDB password
- `PORT` = The port you want the server to run on (optional, defaults to 5000)
4. The server will run on the port specified in the `server.js` file or 5000 by default.
## API Endpoints
### Sessions
- **POST /api/sessions**: Create a new counseling session.
- **GET /api/sessions**: Read all counseling sessions.
- **GET /api/sessions/:id**: Read a specific counseling session by ID.
- **PUT /api/sessions/:id**: Update a specific counseling session by ID.
- **DELETE /api/sessions/:id**: Delete a specific counseling session by ID.

The API supports various operations through the following endpoints:

### Create a Session

- **POST** `/api/sessions`

  Creates a new counseling session with specified details.

  **Body** (application/json)
  ```json
  {
    "clientName": "John Doe",
    "date": "2024-03-05",
    "time": "14:00",
    "topic": "Stress Management",
    "notes": "Client is experiencing workplace stress."
  }
  
### Read All Sessions

- **GET** `/api/sessions`

Fetches a list of all counseling sessions.

### Read a Specific Session

- **GET** `/api/sessions/{id}`

Retrieves detailed information about a specific counseling session by its unique identifier (ObjectID).

### Update a Session

- **PUT** `/api/sessions/{id}`

Updates the details of an existing session.

**Body** (application/json)

```json
{
  "clientName": "Jane Smith",
  "topic": "Updated topic for the session"
}
```
### Delete a Session

- **DELETE** `/api/sessions/{id}`

`{id}` = `objectID` that is specified in the MongoDB.


## Events
The application uses custom event emitters to log session creation, update, and
deletion events. 

## Logs
The application uses a logger to log the proper data to a `combined.log` file using Winston.
## Error Handling
The application includes error handling for 404 (Not Found) and 500 (Internal
Server Error) status codes, providing appropriate messages to the client.

## Testing

This project contains integration tests for the API endpoints using Jest and Supertest. To ensure that the API behaves as expected, run the tests with the following command:

```bash
npm test
```
