import styled from 'styled-components'

import formatUsd from '../../../helpers/numberSplitter'

import {Title} from '../../transaction-page/responsive/mobile-view'

import CustomTransactions from '../../../components/custom-transactions'
import SecundaryText from '../../../components/secundary-text'

const Container = styled.div`
    padding: 1em;
`

const Wrapper = styled.div`
    display: grid;
    grid-gap: 1em;
    top: 0;
`

function Mobile({state}){
    let {   name, 
            type,
            transactions,
            moneyAvailable,
            handleClick } = state
            

    return (
        <Container>
            <Title title='Bank Account'>
                <Wrapper>
                <div style={{display: 'grid', gridGap:'1em'}}>
                    <SecundaryText title='Money available:'>{formatUsd(moneyAvailable)}</SecundaryText>
                    <SecundaryText title='Name:'>{name}</SecundaryText>
                    <SecundaryText title='Type: '>{type}</SecundaryText>
                </div>
                <Wrapper>
                <Title title='Transactions' style={{display: 'grid', gridGap:'1em'}}>
                    {
                        transactions && transactions.map( (transaction, id)=>(
                            <CustomTransactions 
                                key={id}
                                handleClickTransaction={() => handleClick()}
                                animationDelay={id}
                                {...transaction}
                            />
                        ))
                    }
                </Title>
                </Wrapper>
                
                </Wrapper>
            </Title>
        </Container>
    )
}

export default Mobile