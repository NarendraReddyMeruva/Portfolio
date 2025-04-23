import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { username, password });
      if (res.data.message) {
        alert('Login successful!');
        sessionStorage.setItem('user', username); // Store login status
        navigate('/#admin'); // Navigate to Admin section with ID
        window.location.href = '/#admin'; // Force redirect to id="admin"
      } else {
        alert(res.data.error || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  };

  return (
    <div id="login" className="login-page-wrapper">
      <div className="login">
        <form onSubmit={handleLogin}>
          <div className="image">
            <img src="log.jpg" alt="logo" width="100" height="100" />
          </div>
          <h1 align="center">Login</h1>
          <div className="name">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="name">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="btn">
            <button type="submit"><strong>Sign In</strong></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
