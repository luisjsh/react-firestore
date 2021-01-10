import styled from 'styled-components'

import SelectedHome from './selected-home.svg' 
import UnselectedHome from './unselected-home.svg' 

import SelectedTransactions from './selected-transactions.svg'
import UnselectedTransactions from './unselected-transactions.svg'

import SelectedConfiguration from './selected-configuration.svg'
import UnselectedConfiguration from './unselected-configuration.svg'


const UnselectedButtonSquare = styled.div`
    width: 50px;
    height: 50px;
    border: 2px solid #B1B1B1;
    border-radius: 8px;
    transition: .3s;
    cursor: pointer;    
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    ${
        props => {
            switch(props.name){
                case 'dashboard': 
                    return `    
                        background-image: url(${UnselectedHome});
                        `

                case 'transactions':
                    return `
                        background-image: url(${UnselectedTransactions});
                    `

                case 'configuration':
                    return `
                        background-image: url(${UnselectedConfiguration});
                        background-size: 70%;
                    `
                default:
                    return ''
            }
        }
    }

    &:hover, &:focus{
        border: 2px solid #FFDBB9;
        background-color: #FFDBB9;
    }
`

const SelectedButtonSquare = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 8px;        
    border: 2px solid #E17B1C;
    background: #E17B1C;
    transition: .3s;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    ${
        props => {
            switch(props.name){
                case 'dashboard': 
                    return `    
                        background-image: url(${SelectedHome});

                        &:hover, &:focus{
                            border: 2px solid #FFDBB9;
                            background-color: #FFDBB9;
                            background-image: url(${UnselectedHome});
                        }
                        `

                case 'transactions':
                    return `
                    background-image: url(${SelectedTransactions});

                    &:hover, &:focus{
                        border: 2px solid #FFDBB9;
                        background-color: #FFDBB9;
                        background-image: url(${UnselectedTransactions});
                    }
                    `

                case 'configuration':
                    return `
                    background-image: url(${SelectedConfiguration});
                    background-size: 70%;

                    &:hover, &:focus{
                        border: 2px solid #FFDBB9;
                        background-color: #FFDBB9;
                        background-image: url(${UnselectedConfiguration});
                    }
                    `    
                    
                default:
                    return ''
            }
        }
    }

`


const SquareButton =({name, pageName})=>{
    if(name !== pageName) return (
        <UnselectedButtonSquare name={name}/>
    )

    if(name === pageName) return (
        <SelectedButtonSquare name={name}/>
    )
}

export default SquareButton