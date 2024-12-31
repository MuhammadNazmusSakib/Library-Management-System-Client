import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import axios from 'axios';


const DataProvider = ({ children }) => {

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createNewUser = (email, password) => {
    // console.log("dfdy")
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Helper function: Set JWT and user state
  const setJWTToken = async (email) => {
    try {
      const res = await axios.post(
        `https://library-management-system-server-alpha.vercel.app/jwt`,
        { email },
        { withCredentials: true }
      );
      // console.log('JWT set successfully:', res.data);
    } catch (err) {
      // console.error('Error setting JWT:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle authentication state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser); // Set user immediately for UI purposes
        await setJWTToken(currentUser.email); // Set JWT token
        setLoading(false); // Set loading to false after JWT is set
      } else {
        await axios.post(
          `https://library-management-system-server-alpha.vercel.app/logout`,
          {},
          { withCredentials: true }
        ).then(() => {
          setUser(null);
          setLoading(false);
        })
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);


  // update user profile
  const updateUserProfile = (updateData) => {
    // console.log(updateData)
    return updateProfile(auth.currentUser, updateData)
  }

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  //  Google signIn
  const googleSignIn = () => {
    // console.log("gfyug")
    return signInWithPopup(auth, provider)
  }

  const dataInfo = {
    user, setUser, createNewUser, logOut, userLogin, loading, googleSignIn, updateUserProfile
  }
  return (
    <Contex.Provider value={dataInfo}>
      {children}
    </Contex.Provider>
  )
}

export default DataProvider