import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
`

const Label = styled.label`
    padding: .3em;
    font-weight: bold;
    text-transform: capitalize;
    transition: 0.3s;
    z-index: 0;
    ${Wrapper}:hover & {
    color: black;
    }
    ${Wrapper}:focus-within & {
    color: black;
    }
`

const Select = styled.select`
    padding: 1em;
    border-radius: 8px;
    font-weight: bold;
    background: white;
    border: 1px solid #B1B1B1; 
`

const Comment = styled.span`
    padding: .3em;
    font-weight: 200;
`

function CustomSelect({name, label, comment, handleChange, children, ...otherProps}) {
    return (
        <Wrapper>
            {label && <Label>{label}</Label>}
            <Select id={name} name={name} onChange={handleChange} {...otherProps}>
                <option>---------------</option>
                {children}
            </Select>   
            {comment && <Comment>{comment}</Comment>}
        </Wrapper>
    )
}

export default CustomSelect
