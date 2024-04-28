import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  // will carry the jsonServer info
  const [userData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsersData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsersData();
  }, []);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    if (!email || !password) {
      console.error('Email and password are required');
      return;
    }

    const userWithEmail = userData.find(user => user.email.toLowerCase() === email.toLowerCase());

    if (userWithEmail) {
      if (userWithEmail.password === password) {
        console.log('Login successful!', userWithEmail);
      } 
      else {
        console.error('Incorrect password');
      }
    } 
    else  {
      console.error('Email not found');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={loginData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
