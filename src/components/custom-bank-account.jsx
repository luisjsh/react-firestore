import {useState} from 'react'
import styled, {keyframes} from 'styled-components'

const Appear = keyframes`
    0%{
        opacity: 0;
        transform: translateY(10px);
    }

    100%{
        opacity: 1;
        transform: translateY(0);
    }
`

export const SquareBankAccount = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-transform: capitalize;
    font-weight: bold;

    ${props => {
        switch(props.colors[3]){

            case '2':
                return`
                    color: #5EBEF3;    
                    background: #D9F6F3;
                `

            case '3':
                return`
                    color: #F3AF5E;    
                    background: #F6E9D9;    
                `

            case '4':
                return`
                    color: #5EF3BE;    
                    background: #D9F6E1;    
                `

            case '5':
                return`
                    color: #B07BF3;    
                    background: #F5E4FF;    
                `

            case '6':
                return`
                    color: #09AB19;    
                    background: #EAFFBC;      
                `
    
                
            case '7':
                return`
                    color: #F3AF5E;    
                    background: #F6E9D9;     
                `


            case '8':
                return`
                    color: #5EF3BE;    
                    background: #D9F6E1;    
                `

            default: 
                return `
                    color: #F35E5E;
                    background: #F6D9DE;
                `
        }
    }}
`

const Wrapper = styled.div`
    opacity: 0;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1em;
    align-items: center;
    animation: ${Appear} 1s 0.${props =>  props.animationDelay && props.animationDelay}0s forwards; 
`

function CustomBankAccount({
    name,
    type,
    animationDelay,
    handleClickBankAccount
}) {
    return (
        <Wrapper animationDelay={animationDelay} onClick={()=>handleClickBankAccount(name)} tabIndex={0}>
            <SquareBankAccount colors={`${Math.random()}`}>
                {name[0]}    
            </SquareBankAccount>
            <div className="">
                <h5 style={{margin: '0'}}>{name}</h5>
                <span style={{margin: '0'}}>{type}</span>
            </div>
        </Wrapper>
    )
}

export default CustomBankAccount