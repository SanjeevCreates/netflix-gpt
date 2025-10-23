import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm=()=> {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src ='https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg' alt='Netflix Login background' />
      </div>
      <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'> {isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>)}
        <input type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <input type='password' placeholder='Password' className='p-4 my-4  w-full bg-gray-700 rounded-lg' />
        <button type='submit' className='p-4 my-6 w-full bg-red-700 rounded-lg'> {isSignInForm ? "Sign In":"Sign Up"}</button>
        <p className='p-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix Sign up now":"Already Registred Sign In now"}</p>
      </form>
    </div>
  )
}

export default Login;