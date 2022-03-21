import React, { createContext, useState } from 'react';
import ModalWrapper from '../../components/ModalWrapper';
import { useAuthDialog } from './useAuthDialog';

export const AuthDialogContext = createContext({showModal:false,setShowModal:()=>{}});

export const AuthDialogProvider = (props) => {
  // const [showModal,setShowModal] = useState(false)
  const {showModal,setShowModal} = useAuthDialog();
  return (
    <AuthDialogContext.Provider value={{showModal,setShowModal}} >
      <ModalWrapper />
      {props.children}
    </AuthDialogContext.Provider>
  )
}

