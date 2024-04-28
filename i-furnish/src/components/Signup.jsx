import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const [existingUser, setExistingUsers] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setExistingUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsersData();
  }, []);

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const existingEmail = existingUser.some(u => u.email === signupData.email);

    if (!existingEmail) {
      const newUser = { ...signupData };

      try {
        const response = await axios.post('http://localhost:3001/users', newUser);
        console.log('New user added:', response.data);

        setExistingUsers(prevUsers => [...prevUsers, response.data]);

        setSignupData({
          email: '',
          password: '',
          name: '',
          phone: ''
        });
      } catch (error) {
        console.error('Error adding user:', error);
      }
    } else {
      console.log("Email Already Exists!");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={signupData.email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={signupData.password} onChange={handleChange} placeholder="Password" required />
        <input type="text" name="name" value={signupData.name} onChange={handleChange} placeholder="Name" required />
        <input type="tel" name="phone" value={signupData.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
