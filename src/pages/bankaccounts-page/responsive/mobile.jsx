import styled from 'styled-components'

import CustomBankAccount from '../../../components/custom-bank-account'

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

export default function Mobile({bankAccountsArray, handleClickBankAccount}) {
    return (
        <Page>
            <H3>Bank Accounts</H3>
            {
                bankAccountsArray && bankAccountsArray.map( (bankAccount, id) => {
                    return <CustomBankAccount key={id} handleClickBankAccount={handleClickBankAccount} animationDelay={id} {...bankAccount}/>
                })
            }
        </Page>
    )
}
