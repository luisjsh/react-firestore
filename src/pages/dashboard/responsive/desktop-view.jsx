import styled from 'styled-components'

import Card from '../../../components/card'
import {SectionWithTitle} from './mobile-view'
import {LoadingSection} from '../../transaction-page/responsive/mobile-view' 
import PlusButton from '../../../components/add-button/add-button'
import CustomTransactions from '../../../components/custom-transactions'
import CustomBankAccount from '../../../components/custom-bank-account'

const Page = styled.div`
    display: flex;    
    padding: 1em;
    justify-content: center;
`
const LeftSide = styled.div`
    display: grid;
    grid-gap: 1em;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr;
    max-width: 1080px;
    padding: 1em;
    grid-gap: 1em;
`

const RightSide = styled.div`
    display: grid;
    justify-content: right;
`

const AlignRigth = styled.div`
    display:grid;
    grid-gap: .5em;    
    width: 400px;
`

function DashboardDesktop({
    latestTransactionsArray,
    BankAccountsArray,
    moneyAvailable,
    handleClickTransaction,
    handleClickBankAccount,
    handleRedirect
}) {
    return (
        <Page>
            <Container>
                <LeftSide>
                    <Card type='primary' amount={moneyAvailable}/>
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
                    
                </LeftSide>
                <RightSide>
                    <AlignRigth>
                    <SectionWithTitle title='BANK ACCOUNTS' clickName='bank-accounts' handleClick={handleRedirect}>
                        {
                            BankAccountsArray.map( (bankAccountData, id)=>(
                                <CustomBankAccount 
                                    key={id} 
                                    animationDelay={id} 
                                    handleClickBankAccount={handleClickBankAccount}
                                    {...bankAccountData}/>
                            ))
                        }
                    </SectionWithTitle>  
                    </AlignRigth>
                    
                </RightSide>
            </Container>
        </Page>
    )
}

export default DashboardDesktop
