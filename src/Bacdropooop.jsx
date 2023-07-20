import React from 'react'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'

const Bacdropooop = (props) => {
  const qwert = () => {
    props.blockModal()
  }

  return (
    <div>
        {createPortal(
            <BackdropStyle2 onClick={qwert}></BackdropStyle2>,
            document.getElementById("backdrop2")
        )}
    </div>
  )
}

export default Bacdropooop

const BackdropStyle2 = styled.div`
background: rgba(8, 0, 0, 0.85);
width: 100vw;
height: 100vh;
position:absolute;
top: 0;
left: 0;
    
`