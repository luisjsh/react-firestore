import styled, {keyframes} from 'styled-components'
import {useHistory} from 'react-router-dom'

import Logo from '../../components/logo.png'

import CustomTransaction from '../../components/custom-transactions'
import CustomBankAccount from '../../components/custom-bank-account'
import MoneyCard from '../../components/card'
import CustomButton from '../../components/custom-button'

const Appear = keyframes`
    0%{
        oppacity: 0;
    }

    100%{
        opacity: 1;
    }
`

const Page = styled.div`
    display: grid;
    grid-gap: 1em;
`

const Navbar = styled.nav`
    width: 100%;
    display: grid;
    justify-items: center;
    top: 0;
    grid-template-columns: 1fr 2fr 1fr;
    animation: ${Appear} 1s infinite;
`

const Img = styled.img`
    z-index: 1;
    width: 50px;
    height: 55px;
`

const Section = styled.div`
    display: flex;    
    padding: 2em;
    height: 400px;
    justify-content: center;
    align-items: center;
`

const Span = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    color: #000000;
    font-size: 30px;
    padding: 1em;
    text-align: center;
`

const Strong = styled.strong`
    color: #5D4E7B;
    font-size: 40px;
`


export const HorizontableScroll = styled.div`
    display: grid;
`

const Scroll = styled.div`
    display: grid;
    grid-gap: 1em;
    overflow: scroll;
    grid-auto-flow: column;
`

export default function MobileView() {
    const history = useHistory()
    return (
        <Page>
            <Navbar>
                <div className=""></div>
                <Img src={Logo} />
            </Navbar>
            <Section>
                <Span>
                The best way to keep track of your <Strong>finances</Strong>
                </Span>
            </Section>
            
            <Section>

                <HorizontableScroll>
                    <Span>Keep track of all the money available on your accounts</Span>
                    <MoneyCard amount={3000}/>
                </HorizontableScroll>

            </Section>
            <Section>

                <HorizontableScroll>
                    <Span>Keep track of all the accounts</Span>

                    <Scroll>
                        <CustomBankAccount name='Bank of America' type='Saving'/>
                        <CustomBankAccount name='Bank of texas' type='Checking'/>
                    </Scroll>
                </HorizontableScroll>
            </Section>
            
            <Section>
                <HorizontableScroll>
                    <Span>Keep track of all your transactions</Span>
                   
                    <CustomTransaction 
                        subject='Deposit example'
                        type='deposit'
                        moneySpent={1300}
                        bankAccountName='Example'/>

                    <CustomTransaction 
                        subject='Withdraw example'
                        type='withdraw'
                        moneySpent={1300}
                        bankAccountName='Example'/>

                </HorizontableScroll>
            </Section>      
            <Section>
                <HorizontableScroll>
                    <Span>Keep track of all your transactions</Span>
                    <CustomTransaction 
                        subject='Deposit example'
                        type='deposit'
                        moneySpent={1300}
                        bankAccountName='Example'/>

                    <CustomTransaction 
                        subject='Withdraw example'
                        type='withdraw'
                        moneySpent={1300}
                        bankAccountName='Example'/>

                </HorizontableScroll>
                
            </Section>          

            <Section>
                <HorizontableScroll>
                    <Span>If you´re interested please</Span>
                    <CustomButton type='secundary' handleClick={()=>history.push('/login')}>Log in</CustomButton>
                    <Span>Or</Span>
                    <CustomButton handleClick={()=>history.push('/signup')}>Sign up</CustomButton>
                </HorizontableScroll>
            </Section>  
        </Page>
    )
}
