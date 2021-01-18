import styled from 'styled-components'

import formatUsd from '../../../helpers/numberSplitter'

import CustomTransactions from '../../../components/custom-transactions'
import {Title} from '../../transaction-page/responsive/mobile-view'
import SecundaryText from '../../../components/secundary-text'

const Page = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 80%;
`

const Container = styled.div`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
    max-width: 1380px;
`

const SectionTitle = styled.h3`
    text-align: center;
    position: sticky;
    top: 0;
    padding: 1em 0;
    background: white;
    z-index: 1;
`

const Section = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
`

const Header = styled.div`
    display: grid;
    grid-gap: 1em;
`

function Desktop({name, type, moneyAvailable, transactions, handleClick}) {
    return (
        <Page>
            <Container>
                <Header className="">
                <Title title='Bank account' />
                    <SecundaryText title='Money available:'>{formatUsd(moneyAvailable)}</SecundaryText>
                    <SecundaryText title='Name:'>{name}</SecundaryText>
                    <SecundaryText title='Type:'>{type}</SecundaryText>
                </Header>
            <SectionTitle>Transactions</SectionTitle>
            <Section>
                {
                   transactions && transactions.map( (transactionData, id) => (
                        <CustomTransactions 
                            key={id} 
                            animationDelay={id} 
                            handleClickTransaction={handleClick} 
                            {...transactionData}/>
                    ))
                }
            </Section>
            </Container>
        </Page>
    )
}

export default Desktop