
import React, { useState } from 'react';
import axios from 'axios';
import './signin.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log('Sending request:', { email, password });
//   try {
//     const response = await axios.post('http://localhost:5000/signin', { email, password });
//     console.log('Response received:', response.data);
//     setMessage(response.data.message);
//   } catch (error) {
//     console.error('Error:', error);
//     if (error.response && error.response.status === 401) {
//       setMessage('Invalid email or password.');
//     } else {
//       setMessage('Sign-in failed. Please try again.');
//     }
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Sending request:', { email, password });
  try {
    const response = await axios.post('http://localhost:5000/signin', { email, password });
    console.log('Response received:', response.data);
    setMessage(response.data.message);
  } catch (error) {
    console.error('Error:', error);
    if (error.response && error.response.status === 401) {
      setMessage('Invalid email or password.');
    } else {
      setMessage('Sign-in failed. Please try again.');
    }
  }
};


  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Sign In</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default SignIn;

