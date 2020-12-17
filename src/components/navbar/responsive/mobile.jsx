import styled from 'styled-components'
import {useHistory, useParams} from 'react-router-dom'

import Logo from '../../logo.png'
import CustomInput from '../../custom-input/custom-input'

const Wrapper = styled.div`
    display: grid;
    padding: 0 1em;
    grid-gap: .3em;
    justify-items: center;
    align-items: center;
`


function Mobile({children}) {
    let history = useHistory()
    let {id} = useParams()

    return <>
        <Wrapper>
            <img src={Logo} alt='logo' width='43' height='50' onClick={()=>history.push('/dashboard')}/>
            {id === 'dashboard' && <CustomInput placeholder='search bar' paddingWrapper='0'/>}
        </Wrapper>
        {children}
    </>
}

export default Mobile
