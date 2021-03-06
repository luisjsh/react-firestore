import styled from 'styled-components'
import {useParams} from 'react-router-dom'

import Logo from '../../logo.png'
import SquareButton from './square-button'
import AddButton from '../../../components/add-button/add-button'

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



function Desktop({handleRedirect}) {
    const {id} = useParams()
    return (
        <Container>
            <ButtonWrapper>
                <img alt='Logo' src={Logo} width='35px' height='40px'/>
                <Text onClick={()=>handleRedirect('dashboard')}>Finances</Text>
            </ButtonWrapper>
           
            <ButtonWrapper>

                <SquareButton name='dashboard' handleClick={handleRedirect} pageName={id}/>
                <SquareButton name='transactions' handleClick={handleRedirect} pageName={id}/>
            
            </ButtonWrapper>
            {id === 'dashboard' && <AddButton bottom='2em' right='4em'/>}
          
        </Container>
    )
}


export default Desktop
