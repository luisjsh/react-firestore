import styled from 'styled-components'

const SecundaryTitle = styled.h3`
  font-weight: 300;
  font-size: 1.3em;
  padding: 0;
  margin: 0;
`

const P = styled.div`
  font-size: 1.3em;
  margin-left: 3px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`


function SecundaryText({children, title}){
    return (
      <div style={{display: 'flex', alignItems: 'center', gap: '.4em'}}>
        {title && <SecundaryTitle>{title}</SecundaryTitle>}
        <P>{children}</P>
      </div>
    )
  }

  export default SecundaryText