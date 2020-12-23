import styled from 'styled-components'

import Dashboard from '../../../pages/dashboard/dashboard'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1em;
    height: 100%;
`

function Desktop({children}) {
    return (
        <Container>
            jksnksadsddnj
            <div>

            {children}
            </div>
        </Container>
    )
}

export default Desktop
