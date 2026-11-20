import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    setMessage('');

    if (email.trim() === '' || password.trim() === '') {
      setMessage('Please enter your email and password.');
      return;
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('Server not connected. Please start the backend.');
    }

    setIsLoading(false);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setMessage('');
  }

  if (isLoggedIn) {
    return (
      <div className="page">
        <div className="login-box welcome-box">
          <h1>Welcome!</h1>
          <p>You have logged in successfully.</p>
          <p className="logged-email">Logged in as: {email}</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="login-box">
        <div className="brand">nova</div>
        <h1>Login to your account</h1>
        <p className="intro">Enter your details below to continue.</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {message && <p className="error-message">{message}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'Login'}
          </button>
        </form>

        <div className="demo-details">
          <p><strong>For testing:</strong></p>
          <p>Email: demo@example.com</p>
          <p>Password: password123</p>
        </div>

        <p className="bottom-text">Nova Login - Practice Project</p>
      </div>
    </div>
  );
}

export default App;
