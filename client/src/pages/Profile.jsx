// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  // Initialize user state
  const [user, setUser] = useState(null);

  
  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
     
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        location: 'New York,k SA',
      
      };

      setUser(userData);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

 
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Location:</strong> {user.location}</p>
    
      </div>
    </div>
  );
};

export default UserProfile;
