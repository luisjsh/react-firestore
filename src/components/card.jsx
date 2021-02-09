import {useState, useEffect} from 'react'
import styled from 'styled-components'

import splitNumber from '../helpers/numberSplitter'

const Wrapper = styled.div`
    display: grid;
    grid-gap: 1em;
    padding: 1.5em;
    color: white;
    font-weight: 300;
    background-color: #5D4E7B;
    border-radius: 8px;
`

const P = styled.div`
    color: white;
`

const AmountText = styled.div`
    display: grid;
    font-weight: bold;
    color: white;
    font-size: 40px;
    align-items: center;
`
/*
const IncomeSection = styled.section`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 2fr 2fr;
    align-items:center;
`
*/
const SecundaryAmount = styled.div`
    color: white;
    font-weight: bold;
    font-size: ${props => props.fontSize ? props.fontSize : '25px'};
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`

function Card({amount}){
    const [displayedAmount, setDisplayedAmount] = useState(0)

    useEffect(()=>{
        setDisplayedAmount(splitNumber(amount))     
        
        return ()=>setDisplayedAmount(0)
    }, [amount])

    return (
     <Wrapper>
        <P>BALANCE</P>
        
        <AmountText>
            <SecundaryAmount fontSize='30px'>{displayedAmount}</SecundaryAmount>
        </AmountText>

        
     </Wrapper>   
    )
}

export default Card