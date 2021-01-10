import styled from 'styled-components'
import {useParams} from 'react-router-dom'

import Logo from '../../logo.png'
import SquareButton from './square-button'

const Container = styled.div`
    display: grid;
    padding: 1em;
    grid-template-columns: 1fr 2fr 1fr;
`

const ButtonWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-auto-flow: column;
    grid-gap: 1em;
`

const Text = styled.p`
    font-weight: bold;
    transition: .3s;
    color: #5D4E7B;
    cursor: pointer;
    font-size: 1.5em;

    &:hover, &:focus{
        color: #E17B1C;
    }
`



function Desktop() {
    const {id} = useParams()

    return (
        <Container>
            <ButtonWrapper>
                <img alt='Logo' src={Logo} width='35px' height='40px'/>
                <Text>Finances</Text>
            </ButtonWrapper>
           
            <ButtonWrapper>

                <SquareButton name='dashboard' pageName={id}/>
                <SquareButton name='transactions' pageName={id}/>
                <SquareButton name='configuration' pageName={id}/>
            
            </ButtonWrapper>
        
          
        </Container>
    )
}


export default Desktop
