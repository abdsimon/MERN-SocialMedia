// frontend/src/components/Login.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'user@example.com' && password === 'password') {
     
      console.log('Logged in successfully');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <div className="text-pink-400 hover:text-blue-500">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

