import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import PlusIcon from './plus.svg'
import DepositIcon from './deposit.svg'
import WithdrawIcon from './withdraw.svg'

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: ${props => props.bottom ? props.bottom : '1em'};
    right: ${props => props.right ? props.right : '10px'};
    display: grid;
    grid-gap: 1em;
    grid-auto-flow: column;
    align-items: flex-end;
`

const Button = styled.button`
    background-image: url(${PlusIcon});
    background-color: #5D4E7B;
    background-size: 60%;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    &:active{
        background-color: grey;
    }
`

const OptionsWrapper = styled.div`
    padding: 1em;
    background-color: #5D4E7B;
    border-radius: 8px;
    display: grid;
    grid-gap: 1em;
    clip-path: circle(0% at 110% 75%);
    transition: .5s ease-in-out;

    ${ButtonWrapper}:focus-within &{
        clip-path: circle(100%);
    }

    ${ButtonWrapper}:hover &{
        clip-path: circle(100%);
    }
`

const Span = styled.button`
    padding: .4em;    
    color: white;
    font-size: 20px;
    border: none;
    background: transparent;
    border-radius: 8px;
    transition: .5s;
    cursor: pointer;

    &:hover{
        color: #5D4E7B;
        background-color: white;
    }

    &:focus{
        background-color: white;
        color: #5D4E7B;
    }
`


const Square = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35%;
    ${props =>{
        switch(props.type){
            case 'deposit':
                return `
                    background-color: #DDFABF;
                    background-image: url(${DepositIcon});
                `

            case 'withdraw':
                return `
                    background-color: #F6E7D9;
                    background-image: url(${WithdrawIcon});
                `
            
                default: 
                return ''
        }
    }}
`

function AddButton({type, bottom, right}) {
    const history = useHistory()

    const Redirect = (e)=>{
        let {name} = e.target
        history.push(`/add/${name}`)
    }

    if(type) return <Square type={type} />
    

    if(!type) return (
        <ButtonWrapper bottom={bottom} right={right}>
            <OptionsWrapper>
                <Span name='transaction' onClick={Redirect}>Add Transactions</Span>
                <Span name='bank-account' onClick={Redirect}>Add Bank account</Span>
            </OptionsWrapper>
            <Button/>
        </ButtonWrapper>
    )
}

export default AddButton