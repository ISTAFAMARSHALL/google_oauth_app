// src/App.js

import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // You can implement logic to set `isLoggedIn` based on user session

  return (
    <div className="App">
      {isLoggedIn ? (
        <UserProfile />
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
