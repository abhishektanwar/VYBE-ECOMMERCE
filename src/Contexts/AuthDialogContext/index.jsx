import React, { createContext, useState } from 'react';
import Login from '../../components/Authentication/Login';
import SignUp from '../../components/Authentication/SignUp';
import ModalWrapper from '../../components/ModalWrapper';
import { useAuthDialog } from './useAuthDialog';

export const AuthDialogContext = createContext({showModal:false,setShowModal:()=>{},authType:null,setAuthType:()=>{}});

export const AuthDialogProvider = (props) => {
  // const [showModal,setShowModal] = useState(false)
  const {authType,setAuthType} = useAuthDialog();
  return (
    <AuthDialogContext.Provider value={{authType,setAuthType}} >
      <ModalWrapper >{authType==='login' ? <Login /> : <SignUp />}</ModalWrapper>
      {props.children}
    </AuthDialogContext.Provider>
  )
}

