import React from 'react'
import styled from 'styled-components'

import Card from '../../../components/card'
import PlusButton from '../../../components/add-button/add-button'
import CustomTransactions from '../../../components/custom-transactions'

const Container = styled.div`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
`

const SectionHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    font-size: 13px;
`

const Title = styled.div`
    font-weight: bold;
    color: #B1B1B1;
`

const SeeMore = styled.div`
    color: #494949;
    text-align: right; 

    &:hover, &:focus{
        text-decoration: underline;
    }
`

const SectionWithTitle = ({title, children})=>{
    return (
        <>  
            <SectionHeader>
                <Title>{title ? title : ''}</Title>
                <SeeMore tabIndex={0}>VIEW ALL</SeeMore>
            </SectionHeader>
            {children}
        </>
    )
}

function DashboardMobile({state}) {
    let {moneyAvailable, BankAccountsArray, latestTransactionsArray} = state 
    console.log(state)
    return (
        <Container>
            <Card type='primary' amount={moneyAvailable}/>
            <SectionWithTitle title='BANK ACCOUNTS'>
                {
                    BankAccountsArray.map( ({name}, id)=>(
                        <p key={id}>{name}</p>
                    ))
                }
            </SectionWithTitle>

            <SectionWithTitle title='TRANSACTIONS'>
                {
                    latestTransactionsArray.map( (transactionData, id)=>(
                        <CustomTransactions key={id} {...transactionData}/>
                    ))
                }
            </SectionWithTitle>
            <PlusButton />
        </Container>
    )
}

export default DashboardMobile
