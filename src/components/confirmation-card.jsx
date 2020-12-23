import styled from 'styled-components'

import Modal from './modal'
import CustomButton from './custom-button'

const Wrapper = styled.div`
    display: grid;
    padding: 1em;
    grid-gap: .5em;
    background-color: white;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
`


function ConfirmationCard({handleClick, handleSubmit}) {
    return (
        <Modal handleClick={handleClick}>
            <Wrapper>
                ¿Are you sure?
                <CustomButton padding='.4em 4em' type='warning' handleClick={handleClick}>Cancel</CustomButton>
                <CustomButton padding='.4em 4em' handleClick={handleSubmit}>Delete</CustomButton>
            </Wrapper>
        </Modal>
    )
}

export default ConfirmationCard