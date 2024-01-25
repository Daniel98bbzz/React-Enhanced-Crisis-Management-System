# Crisis Counseling Service Platform - Daniel Buzaglo 208745836

## Overview
This project implements a simple server for a Crisis Counseling Service Platform using Node.js. It allows creating, reading, updating, and deleting counseling session information. The server is designed to work with JSON data and can be tested using tools like Postman.

## Prerequisites
- Node.js installed on your machine.
- Basic understanding of HTTP methods (GET, POST, PUT, DELETE).
- Postman for API testing.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Install the necessary Node modules (if any are specified):
4. Start the server:

## API Endpoints
The server supports the following endpoints:

### GET /getSessions
- Fetches all counseling sessions.
- No request body required.

### POST /addSession
- Creates a new counseling session.
- Requires a JSON body with session details.
  Example:
```json
{
 "id": 1,
 "clientName": "John Doe",
 "date": "2024-02-01",
 "time": "10:00",
 "topic": "Stress Management",
 "notes": "First session, introductory meeting"
}
```
### PUT /updateSession/{id}
- Updates an existing counseling session.
- `{id}` should be replaced with the session's ID.
- Requires a JSON body with the updated session details.

### DELETE /deleteSession/{id}
- Deletes an existing counseling session.
- `{id}` should be replaced with the session's ID.
- No request body required.

### GET /getSession/{id}
- Fetches a single counseling session by ID.
- `{id}` should be replaced with the session's ID.
- No request body required.

## Usage
To use the API:
1. Start the server as mentioned in the Installation section.
2. Use Postman or any other API testing tool to send requests to the server.
3. Choose the appropriate HTTP method and URL for the desired operation.

## Notes
- The server is set up to run on `localhost` on port `5000`.
- All data is stored in a JSON file and is not persistent across server restarts.