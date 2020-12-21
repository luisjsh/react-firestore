import styled from 'styled-components'

import LoadingAnimation from './loading-animation.svg'

const Page = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
`

export default function Loading() {
    return (
        <Page>
            <img src={LoadingAnimation} alt='loading' height='100'/>
        </Page>
    )
}
