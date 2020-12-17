import styled from 'styled-components'

const DateWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 1em;
`

const Label = styled.label`
    margin: 0;
    padding: .3em;
    font-weight: bold;
`

const Input = styled.input`
    position: relative;
    border: 1px solid #B1B1B1;
    color: black;
    border-radius: 7px;
    padding: 0.8em 0;
    width: 100%;
    text-align: center;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
    background: #aaaaaa;
    }
    &:invalid {
    color: red;
    }
`

export default function CustomDate({label, date, handleChange, ...otherProps}) {
    return (
        <div>
            <Label>{label}</Label>
            <DateWrapper>
               {date && <> 
                    <Input 
                        name='day' 
                        onChange={handleChange} 
                        type='number' 
                        value={date.day}
                        placeholder='Day' 
                        maxLength='2' 
                        pattern="[0-9]{2}" 
                        {...otherProps}></Input>
                    <Input 
                        name='month' 
                        onChange={handleChange} 
                        type='number' 
                        value={date.month}
                        placeholder='Month' 
                        maxLength="2" 
                        pattern="[0-9]{2}" 
                        {...otherProps}></Input>
                    <Input 
                        name='year' 
                        onChange={handleChange} 
                        type='number' 
                        value={date.year}
                        placeholder='Year' 
                        maxLength='4' 
                        pattern="[0-9]{4}"
                        {...otherProps}></Input>
                    </>
                    }
            </DateWrapper>
        </div>
    )
}
