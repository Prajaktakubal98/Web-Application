import React, { useState } from 'react';

const RegistrationPage = ({ handleRegistration, handlePageChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && confirmPassword && password === confirmPassword) {
      handleRegistration(username, password);
    } else {
      setErrorMessage('Please fill in all fields and ensure the passwords match.');
    }
  };

  return (
    <div className="page">
      <h1>Registration</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <button onClick={() => handlePageChange('login')}>Login</button>
      </p>
    </div>
  );
};

export default RegistrationPage;
