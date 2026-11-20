# Nova Login - Beginner React Project

This is a small login page made for beginner practice. The code uses basic React state, one form submit function, normal CSS and a simple Express server.

## Tools used

- React
- Vite
- CSS
- Node.js
- Express

## Run the project

Open the project folder in VS Code.

### 1. Install the packages

Run this command in the main project folder:

```bash
npm run install-all
```

### 2. Start the backend

Open a terminal in the main folder and run:

```bash
npm run server
```

The backend runs at `http://localhost:5000`.

### 3. Start the frontend

Open another terminal in the main folder and run:

```bash
npm run client
```

Open the address shown by Vite. It is usually `http://localhost:5173`.

## Demo login

- Email: `demo@example.com`
- Password: `password123`

## What this project does

1. Takes an email and password from the user.
2. Checks that both fields are filled in.
3. Checks the email format and password length.
4. Sends the details to the Express server using `fetch()`.
5. The server checks the demo login details.
6. Shows an error for incorrect details or a welcome page for correct details.

## Note

This is only a practice project. It uses fixed demo login details and does not store users in a database. Do not use this login setup for a real website.
