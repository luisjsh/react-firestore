import styled from 'styled-components'

import CustomBankAccount from '../../../components/custom-bank-account'

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

export default function Desktop({bankAccountsArray, handleClickBankAccount}) {
    return (
        <Page>
            <Container>
                <Header>Bank accounts</Header>
                {
                    bankAccountsArray && bankAccountsArray.map( (item, id) =>(
                        <CustomBankAccount 
                        key={id} 
                        animationDelay={id} 
                        handleClickBankAccount={handleClickBankAccount}
                        {...item}/>
                    ))
                }
            </Container>
        </Page>
    )
}
