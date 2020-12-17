import React from 'react'

import useWidth from '../../helpers/useWidth'

import Mobile from './responsive/mobile'
import Desktop from './responsive/desktop'

function Navbar() {
    const width = useWidth()


    if(width <= 425) return (
        <Mobile />
    )

    if(width> 425) return (
        <Desktop />
    )
}

export default Navbar
