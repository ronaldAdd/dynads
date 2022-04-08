import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '../firebase-config';
const auth=getAuth(app);

function useAuthentication() {
    const [user,setUser]=useState([]);    
    
    useEffect(() => {
        const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // console.log(user.email)
              } else {
                setUser();
              }
        })
        return unsubscribeFromAuthStatuChanged;
    }, []) 
    return (
        user
      )
    

  return (
    <div>useAuthentication</div>
  )
}

export default useAuthentication