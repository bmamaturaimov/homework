import React from 'react'
import { styled } from 'styled-components'

const Buttuns = (props) => {



  return (
    <>
        <BtnStyle onClick={props.onClick}>{props.children}</BtnStyle>


    </>
  )
}

export default Buttuns

const BtnStyle = styled.button`
  padding:1px 20px;
  
`