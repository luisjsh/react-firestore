import styled from 'styled-components'

import Logo from '../../components/logo.png'
import CustomButton from '../../components/custom-button'

const Page = styled.div`
    display: grid;
    grid-gap: 1em;
`

const Navbar = styled.nav`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`

const ButtonWrapper = styled.div`
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
`

export default function LandingPage() {
    return (
        <Page>
            <Navbar>
                <img src={Logo} width='45' height='50'/>
                <div className=""></div>
                <ButtonWrapper>
                    <CustomButton type='secundary' padding='1em 0'>Log in</CustomButton>
                    <CustomButton padding='1em 0'>Sign up</CustomButton>
                </ButtonWrapper>
            </Navbar>
            asnaskjdn
        </Page>
    )
}
