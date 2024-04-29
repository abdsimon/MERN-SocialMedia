// eslint-disable-next-line no-unused-vars
import React from 'react';

const Profile = () => {
  
  const name = 'John Doe';
  const email = 'john@example.com';
  const location = 'New York, USA';

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>
    </div>
  );
};

export default Profile;

