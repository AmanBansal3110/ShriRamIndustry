import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn({ onClose, onSignUpClick }) {
  const navigate = useNavigate();

  async function login() {
    try {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!email || !password) {
        alert('Please enter all fields.');
        return;
      }

      const response = await fetch('http://localhost:3001/auth/signin', {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      onClose(); // Close the pop-up
      navigate('/home'); 

    } catch (error) {
      console.error('Error during sign-in:', error);
      alert('Incorrect email or password');
    }
  }

  return (
    <div className="font-sans">
      <h2 className="text-xl font-semibold text-center mb-2 text-gray-800">
            <span className="text-4xl font-extrabold text-pink-500 block mt-1 mb-2">LeeBony</span>
      </h2>
      <p className="text-lg text-center text-gray-700 mb-6 font-medium">
        Welcome back! <span className="text-pink-500">Sign in to continue</span>
      </p>
      <input
        id='email'
        className="border border-gray-300 rounded-md p-2.5 mb-3 w-full text-base text-black focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
        type="email"
        placeholder="Email"
      />
      <input
        id='password'
        className="border border-gray-300 rounded-md text-black p-2.5 mb-4 w-full text-base focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
        type="password"
        placeholder="Password"
      />
      <button 
        onClick={login} 
        className="bg-black text-white w-full py-2.5 rounded-md font-semibold text-base transition duration-150 hover:bg-black mb-4"
      >
        Sign In
      </button>
      <p className="text-gray-600 text-center text-sm">
        Don't have an account?{' '}
        <a onClick={() => { onClose(); onSignUpClick(); }} className="text-pink-500 font-medium hover:underline cursor-pointer">
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default SignIn;
