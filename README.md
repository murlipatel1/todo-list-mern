# Todo List Application

This is a simple Todo List application built using React, Node.js, Express, and MongoDB. It allows users to add, update, delete, and search for todo items. Each todo item has a name and a status which can be either "pending", "in progress", or "completed".

## Features

- **Add Todo Item:** Users can add a new todo item with a name and status.
- **Update Todo Item:** Users can update the name and status of an existing todo item.
- **Delete Todo Item:** Users can delete a todo item.
- **Search Todo Items:** Users can search for todo items by name or status.

## Technologies Used

- **Frontend:**
  - React
  - Axios (for HTTP requests)
  - CSS (for styling)

- **Backend:**
  - Node.js
  - Express
  - Mongoose (for MongoDB interaction)

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app

2. **Install dependencies:**
    ```bash
    cd server
    npm install
    ```

    ```bash
    cd client
    npm install
    ```

3. **Run frontend in client directory**
    ```bash
    npm run start
    ```

4. **Run backend in server directory**
    ```bash
    nodemon index.js
    ```
## Usage

- Open the application in your browser at http://localhost:3000.
- Use the form to add new todo items.
- View the list of todo items.
- Use the buttons to update or delete todo items.
- Use the search bar to filter todo items by name or status.


## Project Structure
- Backend
    - models/todoItems.js: Mongoose schema and model for todo items.
    - routes/todoItems.js: Express routes for CRUD operations on todo items.
    - server.js: Entry point for the Express server.

- Frontend
    - src/App.js: Main React component containing the application logic.
    - src/App.css: CSS file for styling the application.


## Sample Screenshot

### Frontend

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/7924490c-694b-4325-b621-15013672032b)

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/299195b4-2fe9-4f82-ba36-3e5980616f1c)

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/6fc90061-b5d3-47f1-8c3f-317b4cb833a4)

### Backend

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/b1a19d23-2591-4eb6-8bd8-6f802707a198)

### Database

![image](https://github.com/murlipatel1/todo-list-mern/assets/100035961/529dce1a-f1eb-408a-bdb7-125ead1ebdd2)
