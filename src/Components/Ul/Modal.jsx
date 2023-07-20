import React, { Fragment } from 'react'
import Becdrop from '../Becdrop'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'

const Modal = (props) => {
  return (
    <Fragment>

     <Becdrop blockModal={props.blockModal}/>
      {createPortal(
        <ModalStyle>{props.children}</ModalStyle>,
        document.getElementById("modal")

      )}

    </Fragment>

  )
}

export default Modal 

const ModalStyle = styled.div`
  display: inline-block;
  border: 2px solid;
  padding: 10px 50px;
  background-color: #10e02c;
  border-radius:10px;
  position:absolute;
  top: 30%;
  left: 50%;
  z-index:3;
  transform:translate(-50%,-50%)
`


