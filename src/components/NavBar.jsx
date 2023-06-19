import React ,{ useContext } from 'react'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className="logo"></span>
      <span className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() =>signOut(auth)}>Log Out</button>
      </span>
    </div>
  )
}

export default NavBar
