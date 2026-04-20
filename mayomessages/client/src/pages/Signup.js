import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../services/api';
import '../styles/Auth.css';

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const letterCount = pwd.replace(/[^a-zA-Z]/g, '').length;
    if (letterCount < 8 || letterCount > 15) {
      setPasswordError('Password must contain 8-15 letters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (pwd) {
      validatePassword(pwd);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!validatePassword(password)) {
      return;
    }

    const result = await signup(email, username, password);
    if (result.error) {
      setError(result.error);
    } else {
      setIsLoggedIn(true);
      navigate('/chats');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>MayoMessages</h1>
        <p className="made-by">made by Liam Maykowski And Nolan dixon</p>
        <h3>Create Account</h3>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="password-error">{passwordError}</p>}
            <p className="password-hint">8-15 letters required</p>
          </div>
          <button type="submit" disabled={passwordError !== '' && password !== ''}>
            Create Account
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
