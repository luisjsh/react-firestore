import styled from 'styled-components'

import CustomTransactions from '../../../components/custom-transactions'
import Loading from '../../../components/loading/loading'

const Page = styled.div`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
`

const H3 = styled.h3`
    text-align: center;
    position: sticky;
    top: 0;
    padding: 1em 0;
    background: white;
    z-index: 1;
`

function Mobile({transactionsArray, handleClickTransaction}) {
    return (
        <Page>
            <H3>Transactions</H3>
            {
                transactionsArray ? transactionsArray.map( (item, id)=>(
                    <CustomTransactions key={id} handleClickTransaction={handleClickTransaction} animationDelay={id} {...item}/>
                )) :
                <Loading />
            }
        </Page>
    )
}

export default Mobile