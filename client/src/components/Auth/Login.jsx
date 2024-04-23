
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log(response.data);
      
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
     
    </div>
  );
};

export default Login;
