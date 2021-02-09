import React from 'react'
import styled from 'styled-components'

import Card from '../../../components/card'
import PlusButton from '../../../components/add-button/add-button'
import CustomTransactions from '../../../components/custom-transactions'
import CustomBankAccount from '../../../components/custom-bank-account'
import {LoadingSection} from '../../transaction-page/responsive/mobile-view' 

const Container = styled.div`
    padding: 1em;
    display: grid;
    grid-gap: 1.5em;
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

export const HorizontableScroll = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1em;
    overflow: scroll;
`

export const SectionWithTitle = ({title, clickName, handleClick, children})=>{
    return (
        <>  
            <SectionHeader>
                <Title>{title ? title : ''}</Title>
                <SeeMore name={clickName} onClick={()=>handleClick(clickName)} tabIndex={0}>VIEW ALL</SeeMore>
            </SectionHeader>
            {children}
        </>
    )
}

function DashboardMobile({state}) {
    let {moneyAvailable, 
        BankAccountsArray, 
        latestTransactionsArray, 
        handleClickTransaction, 
        handleClickBankAccount,
        handleRedirect} = state 

    if(!moneyAvailable ||
        !BankAccountsArray || 
        !latestTransactionsArray || 
        !handleClickTransaction || 
        !handleClickBankAccount) return (
            <Container>
            <Card type='primary' amount={moneyAvailable}/>
            <SectionWithTitle title='BANK ACCOUNTS' clickName='bank-accounts' handleClick={handleRedirect}>
                <HorizontableScroll>
                    <LoadingSection />
                </HorizontableScroll>
            </SectionWithTitle>

            <SectionWithTitle title='TRANSACTIONS' clickName='transactions' handleClick={handleRedirect}>
                <LoadingSection />
            </SectionWithTitle>
            <PlusButton />
        </Container>
        )

    return (
        <Container>
            <Card type='primary' amount={moneyAvailable}/>
            <SectionWithTitle title='BANK ACCOUNTS' clickName='bank-accounts' handleClick={handleRedirect}>
                <HorizontableScroll>
                {
                    BankAccountsArray.map( (bankAccountData, id)=>(
                        <CustomBankAccount 
                            key={id} 
                            animationDelay={id} 
                            handleClickBankAccount={handleClickBankAccount}
                            {...bankAccountData}/>
                    ))
                }
                </HorizontableScroll>
            </SectionWithTitle>

            <SectionWithTitle title='TRANSACTIONS' clickName='transactions' handleClick={handleRedirect}>
                {
                    latestTransactionsArray.map( (transactionData, id)=>(
                        <CustomTransactions 
                            key={id} 
                            animationDelay={id} 
                            handleClickTransaction={handleClickTransaction} 
                            {...transactionData}/>
                    ))
                }
            </SectionWithTitle>
            <PlusButton />
        </Container>
    )
}

export default DashboardMobile