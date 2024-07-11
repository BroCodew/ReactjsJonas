// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react'
import FormAuth from './components'


export const AuthProvider = createContext({})

const AuthContext = () => {
  const [infor, setInfor] = useState([])
  console.log("22222222", infor);


  return (
    <AuthProvider.Provider value={{ infor, setInfor }}>
      <FormAuth />
    </AuthProvider.Provider>
  )
}

export default AuthContext
