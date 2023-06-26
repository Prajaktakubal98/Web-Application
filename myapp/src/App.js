import React, { useState } from 'react';
import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';

const App = () => {
  const [page, setPage] = useState('registration');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleRegistration = (username, password) => {
    // Implement registration logic here
    if (username && password) {
      setIsLoggedIn(true);
      setUsername(username);
      setPage('post');
    }
  };

  const handleLogin = (username, password) => {
    // Implement login logic here
    if (username && password) {
      setIsLoggedIn(true);
      setUsername(username);
      setPage('post');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPage('registration');
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      {page === 'registration' && (
        <RegistrationPage
          handleRegistration={handleRegistration}
          handlePageChange={handlePageChange}
        />
      )}
      {page === 'login' && (
        <LoginPage handleLogin={handleLogin} handlePageChange={handlePageChange} />
      )}
      {isLoggedIn && <PostPage handleLogout={handleLogout} />}
    </div>
  );
};

export default App;
