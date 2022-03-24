import React, { createContext, useState } from 'react';
import Login from '../../components/Authentication/Login';
import SignUp from '../../components/Authentication/SignUp';
import ModalWrapper from '../../components/ModalWrapper';

export const AuthDialogContext = createContext({showModal:false,setShowModal:()=>{},authType:null,setAuthType:()=>{}});

export const AuthDialogProvider = (props) => {
  const [authType,setAuthType] = useState(null);
  return (
    <AuthDialogContext.Provider value={{authType,setAuthType}} >
      <ModalWrapper >{authType==='login' ? <Login /> : <SignUp />}</ModalWrapper>
      {props.children}
    </AuthDialogContext.Provider>
  )
}

