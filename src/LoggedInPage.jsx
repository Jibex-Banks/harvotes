import React from 'react';

const LoggedInPage = ({ username, onLogout }) => {
  return (
    <div className="logged-in-page">
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default LoggedInPage;