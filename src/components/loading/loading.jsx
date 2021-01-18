import styled from 'styled-components'

import LoadingAnimation from './loading-animation.svg'

const Page = styled.div`
    position: absolute;
    width: ${props => props.width ? props.width : '100%'};
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    z-index: 1;
`

export default function Loading({width}) {
    return (
        <Page width={width}>
            <img src={LoadingAnimation} alt='loading' height='100'/>
        </Page>
    )
}
