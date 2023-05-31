# iNotebook Backend

iNotebook Backend is a Node.js project built using the Express framework and JavaScript. It serves as a backend API for https://github.com/nishit-chaudhary/inotebook-frontend. The project utilizes MongoDB as the database for storing user details and notes.\

## Technologies Used

![Node.js](https://img.icons8.com/color/48/000000/nodejs.png) ![JavaScript](https://img.icons8.com/color/48/000000/javascript.png) ![MongoDB](https://img.icons8.com/color/48/000000/mongodb.png)



## Prerequisites

Before running this project, ensure that you have the following installed on your machine:

- Node.js (version >= 10.0.0)
- NPM (Node Package Manager)
- MongoDB (installed and running)

## Installation

1. Clone this repository to your local machine using the following command:

```shell
git clone https://github.com/nishit-chaudhary/inotebook-backend.git
```

2. Navigate to the project directory:

```shell
cd inotebook-backend
```

3. Install the required dependencies by running:

```shell
npm install
```
## Usage

To start the development server, use the following command

```shell
nodemon .\index.js
```

5. Open your web browser and access the app at http://localhost:5000.

## API Endpoints

Once the server is running, you can access the following API endpoints:

### Authentication Routes

- `/createuser`: POST request to create a new user.
- `/login`: POST request to authenticate a user.

### Notes Routes

- `/fetchallnotes`: GET request to retrieve all notes for the authenticated user.
- `/addnote`: POST request to add a new note for the authenticated user.
- `/deletenote/:id`: DELETE request to delete a specific note by its ID.
- `/updatenote/:id`: PUT request to update a specific note by its ID.

## Project Structure

The project structure is organized as follows:

- `app.js`: Entry point of the application, where the Express server is created and configured.
- `routes/`: Contains the route definitions for authentication and notes.
- `middlewares/`: Contains the custom middleware functions used in your application.
- `models/`: Contains the data models and schema definitions for users and notes.


## Contributing

   Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

