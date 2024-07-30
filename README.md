Sure! Here's a README file for your project:

---

# Connectify

Connectify is a contact management application with user authentication. It allows users to manage their contacts securely, with operations like creating, reading, updating, and deleting contacts.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Login
- JWT Authentication
- CRUD Operations for Contacts
- Secure endpoints using JWT Middleware
- Error Handling

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Audumbar25/Backend-ConnectifyP.git
    cd Backend-ConnectifyP
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project and add the following variables:

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongo_connection_string
    SECRET=your_jwt_secret
    ```

### Running the Application

1. Start the MongoDB server.

2. Run the application:

    ```sh
    npm start
    ```

3. The application should now be running on `http://localhost:5000`.

## API Endpoints

### User Routes

- **Register User**
  - `POST /api/users/register`
  - Request body: `{ "username": "user", "email": "user@example.com", "password": "password" }`

- **Login User**
  - `POST /api/users/login`
  - Request body: `{ "email": "user@example.com", "password": "password" }`

- **Get Current User**
  - `GET /api/users/current`
  - Headers: `Authorization: Bearer <token>`

### Contact Routes

- **Get All Contacts**
  - `GET /api/contacts`
  - Headers: `Authorization: Bearer <token>`

- **Create New Contact**
  - `POST /api/contacts`
  - Headers: `Authorization: Bearer <token>`
  - Request body: `{ "name": "John Doe", "email": "john@example.com", "phone": "1234567890" }`

- **Get Contact by ID**
  - `GET /api/contacts/:id`
  - Headers: `Authorization: Bearer <token>`

- **Update Contact**
  - `PUT /api/contacts/:id`
  - Headers: `Authorization: Bearer <token>`
  - Request body: `{ "name": "Audumbar Tanangi", "email": "tanangiaudumbar@example.com", "phone": "1234567890" }`

- **Delete Contact**
  - `DELETE /api/contacts/:id`
  - Headers: `Authorization: Bearer <token>`

## Error Handling

Errors are handled using a custom middleware. The following error codes are used:

- `400` - Validation Error
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

---

Feel free to modify this README file as per your project requirements.
