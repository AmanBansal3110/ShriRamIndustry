import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ onClose, onSignInClick }) {
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
      onClose(); // Close the modal on successful registration
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="font-sans">
      <h2 className="text-xl font-semibold text-center mb-2 text-gray-800">
            <span className="text-4xl font-extrabold text-pink-500 block mt-1 mb-2">LeeBony</span>
      </h2>
      <p className="text-lg text-center text-gray-700 mb-6 font-medium">
        Create your account and <span className="text-pink-500">start exploring</span>
      </p>
      <input
        id='firstname'
        className="border border-gray-300 text-black rounded-md p-2.5 mb-3 w-full text-base focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
        type="text"
        placeholder="First Name"
      />
      <input
        id='lastname'
        className="border border-gray-300 text-black rounded-md p-2.5 mb-3 w-full text-base focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
        type="text"
        placeholder="Last Name"
      />
      <input
        id='email'
        className="text-black border border-gray-300 rounded-md p-2.5 mb-3 w-full text-base focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
        type="email"
        placeholder="Email"
      />
      <input
        id='password'
        className="text-black border border-gray-300 rounded-md p-2.5 mb-3 w-full text-base focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
        type="password"
        placeholder="Password"
      />
      <button 
        onClick={register} 
        className="bg-black text-white w-full py-2.5 rounded-md font-semibold text-base transition duration-150 mb-4"
      >
        Sign Up
      </button>
      <p className="text-gray-600 text-center text-sm">
        Already have an account?{' '}
        <a onClick={() => { onClose(); onSignInClick(); }} className="text-pink-500 font-semibold hover:underline cursor-pointer">
          Sign In
        </a>
      </p>
    </div>
  );
}

export default SignUp;
