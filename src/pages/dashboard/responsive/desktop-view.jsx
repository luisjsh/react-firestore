import styled from 'styled-components'

import Card from '../../../components/card'
import CustomTransactions from '../../../components/custom-transactions'
import CustomBankAccount from '../../../components/custom-bank-account'

const Page = styled.div`
    display: flex;    
    padding: 1em;
    justify-content: center;
`
const LeftSide = styled.div`
    display: grid;
    grid-gap: 4em;
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
    max-width: 400px;
`
const SectionHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    font-size: 13px;
    margin: 0 0 20px;
    cursor: pointer;
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
const SectionWithTitle = ({title, clickName, handleClick, children})=>{
    return (
        <div>  
            <SectionHeader>
                <Title>{title ? title : ''}</Title>
                <SeeMore name={clickName} onClick={()=>handleClick(clickName)} tabIndex={0}>VIEW ALL</SeeMore>
            </SectionHeader>
            <div style={{display: 'grid', gridGap: '1em'}}>
                {children}    
            </div>
        </div>
    )
}

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
