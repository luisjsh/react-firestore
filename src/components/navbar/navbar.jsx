import {useHistory} from 'react-router-dom'
import useWidth from '../../helpers/useWidth'

import Mobile from './responsive/mobile'
import Desktop from './responsive/desktop'

function Navbar() {
    const width = useWidth()
    const history = useHistory()

    const handleRedirect =(name)=>{
        history.push(`/${name}`)
    }

    const state = {
        handleRedirect
    }

    if(width <= 700) return (
        <Mobile {...state}/>
    )

    if(width> 700) return (
        <Desktop {...state}/>
    )
}

export default Navbar