import React from 'react'
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

const Becdrop = (props) =>{
  const qwert = () => {
    props.blockModal()
  }
  return (
    <div>
      {createPortal(
        <BackdropStyle onClick={qwert}></BackdropStyle>,
        document.getElementById("backdrop")
      )}

    </div>
  )
}

export default Becdrop;

const BackdropStyle = styled.div`
background: rgba(15, 0, 0, 0.85);
width: 100vw;
height: 100vh;
position:absolute;
top: 0;
left: 0;
    
`