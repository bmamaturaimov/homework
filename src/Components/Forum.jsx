import React from 'react'
import Bacdropooop from '../Bacdropooop'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'

const Forum = (props) => {
  return (
    <div>
      <Bacdropooop blockModal={props.blockModal}/>
      {createPortal(
        <ModalStyle>{props.children}</ModalStyle>,
        document.getElementById("modal2")
      )}
        
    </div>
  )
}

export default Forum;

const ModalStyle = styled.div`
  display: inline-block;
  border: 2px solid;
  padding: 10px 50px;
  background-color: #f50612;
  border-radius:10px;
  position:absolute;
  top: 30%;
  left: 50%;
  z-index:3;
  transform:translate(-50%,-50%);

`