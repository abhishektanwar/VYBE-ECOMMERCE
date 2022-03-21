import React,{useRef} from 'react'
import './modal-wrapper.css'
const ModalWrapper = ({showModal,setShowModal}) => {
  const modalRef = useRef()

  const closeModal = (e) => {
    if(modalRef.current === e.target){
      setShowModal(false)
    }
  }
  return (
      showModal ? (
        <div className="modal-background" onClick={closeModal} ref={modalRef}>
          <div className="modal-wrapper"></div>
          <button className="modal-close-button" onClick={()=>setShowModal(false)} >X</button>
        </div>
      ) : null
  )
}

export default ModalWrapper
