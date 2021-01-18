import styled from 'styled-components'

import ConnectionErrorImg from './connection-error.svg'
import CustomButton from '../../components/custom-button'

const Page = styled.div`
    position: absolute;
    height: 80%;
    width: 100%;

`

const Error = styled.div`
    display: grid;
    padding: 1em;
    grid-gap: 1em;
    height: 100%;
    align-items: center;
    justify-content: center;
    grid-template-rows: 1fr 2fr 1fr;
`

const Title = styled.h3`
    text-align: center;
`

function ErrorPage() {
    return (
        <Page>
            <Error>
                <Title>Its seems something went wrong</Title>
                <img alt='connection error' src={ConnectionErrorImg} />
                <CustomButton handleClick={()=>window.location.reload()}>Try again</CustomButton>
            </Error>
        </Page>
    )
}

export default ErrorPage