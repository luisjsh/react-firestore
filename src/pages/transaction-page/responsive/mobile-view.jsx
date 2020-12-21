import {useState} from 'react'
import styled from 'styled-components'

import usdFormat from '../../../helpers/numberSplitter'

import ConfirmationCard from '../../../components/confirmation-card'
import Square from '../../../components/add-button/add-button'
import CustomButton from '../../../components/custom-button'
import SecundaryText from '../../../components/secundary-text'
import {SquareBankAccount} from '../../../components/custom-bank-account'
import {AmountText} from '../../../components/custom-transactions'

const Container = styled.div`
    display: grid;    
    grid-gap: 1em;
    padding: 1em;
`

const SectionHeader = styled.header`
    
`

const Label = styled.p`
    padding: 0;
    margin: 0;
    font-size: 30px;
    font-weight: 100;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`

const Title = ({title, children}) =>{
    return <>
        <SectionHeader>
            <Label>{title ? title : ''}</Label>
        </SectionHeader>
        {children}
    </>
}

function MobileView({state}) {
    const [confirmation, setConfirmation] = useState(false)

    let {
        bankAccountName,
        date,
        moneySpent,
        subject,
        type} = state
    

    if(state === {})return(
        <div>
            loading
        </div>
    ) 

    if(state !== {}) return (
        <Container>
            {confirmation && <ConfirmationCard handleClick={()=>setConfirmation(false)}/>}
            <Title title='Transaction'>
                <Wrapper>
                    <Square type={type}/>
                    <div style={{display: 'grid', gridGap: '1em'}}>
                        <SecundaryText >{subject}</SecundaryText>
                        <SecundaryText title='Money spent:'>            
                            <AmountText 
                                type={type}
                                fontSize='20px'>
                                    {`${type === 'deposit' ? '+' : '-'}${usdFormat(moneySpent)}`}
                            </AmountText>
                        </SecundaryText>
                        <SecundaryText title='Date:'>{date}</SecundaryText>
                        <SecundaryText title='Type:'>{type}</SecundaryText>
                    </div>    
                </Wrapper>
            </Title>
            <Title title='Bank account'>
                <Wrapper>
                    <SquareBankAccount colors={`${Math.random()}`}>
                        {bankAccountName && bankAccountName[0]}
                    </SquareBankAccount>
                    
                    <div style={{display: 'grid', gridGap: '1em'}}>
                        <SecundaryText >{bankAccountName}</SecundaryText>
                    </div>    
                </Wrapper>
            </Title>  
            <CustomButton type='warning' padding='.6em' handleClick={()=>setConfirmation(true)}>Delete</CustomButton>    
        </Container>
    )
}

export default MobileView