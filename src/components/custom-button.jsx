import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: ${props => props.padding ? props.padding : '1em 4em'};
    font-weight: bold;
    font-size: 1em;
    border-radius: 8px;
    cursor: pointer;
    transition: .3s;
    ${(props) =>{
     switch(props.type){  
        case 'not-choosed-success': 
            return `
                color: #64B049; 
                background: white;
                border:1px solid white;
              &:hover, &:focus-within{
                color: #64B049;
                background: #DDFABF;
            }` 

        case 'success': 
            return `
                color: #64B049; 
                background: #DDFABF;
                border:1px solid #DDFABF;
                
                &:hover, &:focus-within{
                    color: #64B049;
                    background: #DDFABF;
                }
            `

        case 'not-choosed-failure': 
            return `
                color: #F35E5E; 
                background: white;
                border:1px solid white;
                
                &:hover, &:focus-within{
                    color: #F35E5E; 
                    background: #F6D9DE;
                }
            `

        case 'failure': 
            return `
                color: #F35E5E; 
                background: #F6D9DE;
                border:1px solid #F6D9DE;
                
                &:hover, &:focus-within{
                    color: #F35E5E; 
                    background: #F6D9DE;
                }
            `

        case 'warning': 
            return `
                color: white; 
                background: #FC2B2B;
                border:1px solid #FC2B2B;
                
                &:hover, &:focus-within{
                    color: white; 
                    background: #FC2B2B;
                }
            `    

        default: 
            return ` 
            color: white;
            background: #5D4E7B;
            border:1px solid #5d4e7b;

            &:hover, &:focus-within{
                background: white;
                color: #5d4e7b;
            }
            `

    }}}




    &:disabled{
        opacity: .3em;
    }
`

function CustomButton({type, disabled,handleClick, children, ...otherProps}) {
    return (
        <Button type={type} onClick={handleClick} disabled={disabled} {...otherProps}>{children}</Button>
    )
}

export default CustomButton
