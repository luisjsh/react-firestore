import React from 'react'
import reactDOM from 'react-dom'
import styled from 'styled-components'

const Page = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Close = styled.div`
    position: fixed;
    z-index: -1;
    opacity: .7;
    width: 100%;
    height: 100%;
    background-color: grey;
`


const Modal  = ({children, handleClick}) =>(
    reactDOM.createPortal(
        <Page>
            <Close onClick={handleClick} />
            {children}
        </Page>,
        document.querySelector('#modal')
    )
)



export default Modal