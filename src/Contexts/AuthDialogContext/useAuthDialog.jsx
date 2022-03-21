import React, { useState } from 'react';

export const useAuthDialog = () => {
  const [showModal,setShowModal] = useState(false);
  return ({showModal,setShowModal})
}