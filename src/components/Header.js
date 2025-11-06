import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

import { NetflixLogoURL } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    // Sign out logic here
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate('/error');
    });

    console.log('User signed out');
  };
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName,photoURL} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
    navigate("/browse");
    
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
});
// unsubsribe when component unmounts 
return () => unsubscribe();
}, []);


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img src={NetflixLogoURL} alt ="Netflix Logo" className='w-44'/>

      {user && (<div className='flex p-2'>
      <img
       src={user?.photoURL}
       alt='user icon'
       className='w-12 h-12 '
      /> 
      <button onClick={handleSignOut} className='font-bold text-white'>(sign out)</button>
      </div>)}
    </div>

  )
}

export default Header 