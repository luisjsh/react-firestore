import styled, {keyframes} from 'styled-components'
import {useHistory} from 'react-router-dom'

import useWidth from '../../helpers/useWidth'

import Mobile from './mobile-view'

import Logo from '../../components/logo.png'
import Dancing from './img/dancing.svg'
import Caring from './img/caring.svg'
import Reading from './img/reading.svg'

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
`

const Navbar = styled.nav`
    position: absolute;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    animation: ${Appear} 1s infinite;
`

const ButtonWrapper = styled.div`
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
`

const Section = styled.section`
    height: 700px;
    background-color: ${props => props.bgColor ? props.bgColor : 'white'};
`

const Img = styled.img`
    z-index: 1;
`

const Flex = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
`

const Span = styled.span`
    font-size: ${props => props.fontSize ? props.fontSize : '30px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '300'};
    color: ${props => props.fontColor && props.fontColor};
`

const Strong = styled.strong`
    font-size: 50px;
    font-weight: bold;
    color: #5D4E7B;
`

const TextWrapper = styled.div`
    display: grid;
    grid-gap: 1em;    
    width: 300px;
`


export default function LandingPage() {
    const history = useHistory()
    const width = useWidth()
    if(width <= 600) return(<Mobile />
    )

    if(width > 600) return (
        <Page>
            <Navbar>
                <div style={{display:'grid', justifyItems: 'center', alignItems:'center'}}>
                    <Img src={Logo} width='45' height='50'/>
                </div>

                <div className=""></div>

                <ButtonWrapper>
                    <CustomButton handleClick={()=>history.push('/login')} type='secundary' padding='1em 0'>Log in</CustomButton>
                    <CustomButton handleClick={()=>history.push('/signup')} padding='1em 0'>Sign up</CustomButton>
                </ButtonWrapper>
            </Navbar>
            <Section>
                <Flex>
                    <TextWrapper>
                        <Span>
                        The best way to keep track of your <Strong>finances</Strong>.
                        </Span>
                    </TextWrapper> 
                    
                    <Img src={Dancing} width='50%' height='50%'/>
                </Flex>
            </Section>
            <Section bgColor='#F2F2F2'>
                <Flex>
                    <TextWrapper>
                        <Span fontSize='40px' fontWeight='bold' fontColor='black'>
                            Keep caring of those you love.
                        </Span>
                    </TextWrapper> 
                    
                    <Img src={Caring} width='50%' height='50%'/>
                </Flex>
            </Section>
            <Section>
                <Flex>
                    <Img src={Reading} width='50%' height='50%'/>
                    
                    <TextWrapper>
                        <Span fontSize='40px' fontWeight='bold' fontColor='black'>
                            You don´t need to worry about other than living your life
                        </Span>
                    </TextWrapper> 
                </Flex>
            </Section>
            <Section>
                <Flex>
                    <TextWrapper>
                        <Span>
                        If you´re interested please.
                        </Span>
                        <CustomButton handleClick={()=>history.push('/signup')}>
                            Sign up
                        </CustomButton>
                    </TextWrapper>
                </Flex>
            </Section>
        </Page>
    )
}
