import styled, {keyframes} from 'styled-components'

import SquareWithIcon from './add-button/add-button'
import formatUsd from '../helpers/numberSplitter'

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

const Wrapper = styled.div`
    display: grid;
    opacity: 0;
    border: 1px solid white;
    border-radius: 8px;
    grid-template-columns: .7fr 3fr; 
    align-items: center;
    justify-content: center;
    animation: ${Appear} 1s 0.${props =>  props.animationDelay && props.animationDelay}0s forwards;  
    cursor: pointer;  
`

const ContextWrapper = styled.div`
    display: grid;
    grid-gap: .5em;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    padding: .5em;
    font-weight: bold;
    font-size: 15px;
    border-radius: 10px;
    &:hover, &:focus {
        background: #FFDBB9;
    }
`

const SubjectWrapper = styled.div`
    display: grid;
    grid-gap: .3em;
`

const SecundaryText = styled.div`
    font-weight: 300;
    font-size: 13px;
`

export const AmountText = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    font-weight: bold;
    text-align: right;
    font-size: ${props => props.fontSize ? props.fontSize : '13px'};
    ${props =>{
        switch(props.type){
            case 'deposit':
                return `
                    color: #64B049;
                `

            case 'withdraw':
                return `
                    color: #F35E5E;
                `
            
                default: 
                return ''
        }
    }}
`

function CustomTransactions({
    moneySpent,
    subject,
    date,
    type,
    bankAccountName,
    animationDelay,
    handleClickTransaction
}) {
    
    return (
        <Wrapper onClick={()=>handleClickTransaction(bankAccountName, subject)} animationDelay={animationDelay} tabIndex={0}>
            <SquareWithIcon type={type}/>
            <ContextWrapper>
                <SubjectWrapper>
                    <p style={{margin: '0'}}>{subject}</p>
                    <SecundaryText>{bankAccountName} {date}</SecundaryText>
                </SubjectWrapper>
            <AmountText type={type}>{`${type === 'deposit' ? '+' : '-'}${formatUsd(moneySpent)}`}</AmountText>
            </ContextWrapper>
        </Wrapper>
    )
}

export default CustomTransactions