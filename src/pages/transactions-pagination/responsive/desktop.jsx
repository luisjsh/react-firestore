import styled from 'styled-components'

import CustomTransactions from '../../../components/custom-transactions'
import Loading from '../../../components/loading/loading'

const Page = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80%;
`

const Container = styled.div`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr;
    max-width: 1380px;
`

const Header = styled.h3`
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

export default function Desktop({transactionsArray, handleClickTransaction}) {
    return (
        <Page>
            <Container>
                    <Header>Transactions</Header>
            {
                transactionsArray ? 
                        
                        <Section>
                            {transactionsArray.map( (item, id)=>(
                                <CustomTransactions 
                                    key={id} 
                                    handleClickTransaction={handleClickTransaction} 
                                    animationDelay={id} 
                                    {...item}/>
                                    ))
                            } 
                        </Section>
                            :
                            <Loading width='100px'/>

                        }
            </Container>
        </Page>
    )
}
