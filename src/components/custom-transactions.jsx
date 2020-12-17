import styled from 'styled-components'

import SquareWithIcon from './add-button/add-button'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .7fr 2fr 1fr; 
`

function CustomTransactions({
    moneySpent,
    moneyPreviously,
    subject,
    type,
    bankAccountName
}) {
    
    return (
        <Wrapper>
            <SquareWithIcon type={type}/>
        </Wrapper>
    )
}

export default CustomTransactions