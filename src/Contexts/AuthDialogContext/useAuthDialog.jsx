import React, { useState } from 'react';

export const useAuthDialog = () => {
  const [showModal,setShowModal] = useState(false);
  const [authType,setAuthType] = useState(null);
  const [creds,setCreds] = useState({});

  const handleAuthCreds = (e) => {
    // setCreds(credentials => {...credentials,e.target.name:e.target.value}))
    // setCreds((e) => {...creds,e.targe.name:e.target.value})

  }
  return ({showModal,setShowModal,authType,setAuthType})
}