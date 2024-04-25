// frontend/src/components/Login.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  

  return (
    <div>
     
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
  
    </div>
  );
};

export default Login;

