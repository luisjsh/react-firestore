import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import Logo from '../../logo.png'

const Wrapper = styled.div`
    display: grid;
    padding: 0 1em;
    grid-gap: .3em;
    justify-items: center;
    align-items: center;
`


function Mobile() {
    let history = useHistory()

    return <Wrapper>
            <img src={Logo} alt='logo' width='43' height='50' onClick={()=>history.push('/dashboard')}/>
        </Wrapper>
}

export default Mobile
