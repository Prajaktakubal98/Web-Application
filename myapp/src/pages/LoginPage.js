import React, { useState } from 'react';

const LoginPage = ({ handleLogin, handlePageChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      handleLogin(username, password);
    } else {
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="page">
      <h1>Login</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button onClick={() => handlePageChange('registration')}>Register</button>
      </p>
    </div>
  );
};

export default LoginPage;
