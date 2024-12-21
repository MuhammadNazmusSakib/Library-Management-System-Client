import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';


const DataProvider = ({ children }) => {

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createNewUser = (email, password) => {
    // console.log("dfdy")
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
      // jwt
      // if(currentUser?.email) {
      //   const user = {email: currentUser.email}
      //   axios.post(`http://localhost:5000/jwt`, user, {withCredentials: true})
      //   .then(res => {
      //     console.log(res.data)
      //     setLoading(false)
      //   })
      // }
      // else {
      //   axios.post(`http://localhost:5000/logout`, {}, {
      //     withCredentials: true
      //   })
      //   .then(res => {
      //     console.log('logout', res.data)
      //     setLoading(false)
      //   })
      // }

    })
    return () => {
      unSubscribe()
    }
  }, [])

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