import React from "react";
import './ErrorModal.css'

const ErrorModal = (props) => {
    console.log(props)
    const closeModal = ()=>{
        props.setdata([0,''])
    }
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <p>{props.message}</p>
          <button className="close" onClick={closeModal}>CLOSE</button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
