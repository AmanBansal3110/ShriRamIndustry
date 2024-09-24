import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css'; // Importing the enhanced custom CSS file

function SignUp() {
  const navigate = useNavigate();
  async function register() {
    try {
      const firstname = document.getElementById('firstname').value;
      const lastname = document.getElementById('lastname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!firstname || !lastname || !email || !password) {
        alert('All fields are required. Please fill out every field.');
        return;
      }

      const response = await fetch('http://localhost:3001/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname, email, password }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      navigate('/home');
    } catch (error) {
        alert(error.message);
    }
  }

  return (
    <div className="sign-up-container bg-white">
      <div className="sign-up-card bg-[rgb(73,71,72)] text-white">
        <h2 className="sign-up-title text-[rgb(73,71,72)]">Create an Account</h2>
        <div className="input-group">
          <input
            id='firstname'
            className="sign-up-input"
            type="text"
            placeholder="First Name"
            name='firstname'
          />
          <input
            id='lastname'
            className="sign-up-input"
            type="text"
            placeholder="Last Name"
            name='lastname'
          />
        </div>
        <input
          id='email'
          className="sign-up-input full-width"
          type="email"
          placeholder="Email"
          name='email'
        />
        <input
          id='password'
          className="sign-up-input full-width"
          type="password"
          placeholder="Password"
          name='password'
        />
        <button onClick={register} className="sign-up-button bg-[rgb(73,71,72)] text-white hover:bg-gray-700">Sign Up</button>
        <p className="sign-up-footer">
          Already have an account?{' '}
          <a onClick={() => navigate('/SignIn')} className="sign-up-link text-[rgb(73,71,72)]">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
