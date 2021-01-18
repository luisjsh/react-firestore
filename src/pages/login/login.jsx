import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

import {useAuth} from '../../context/authContext'
import passwordCheck from '../../helpers/passwordCheck'

import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/custom-button'

const Container = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 1em;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-gap: 1em;
`

const TitleTab = styled.div`
  padding: 1em;
  font-weight: bold;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorTab = styled.div`
  padding: 1em;
  background: #fee2e7;
  font-weight: bold;
  color: red;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Span = styled.div`
    border-radius: 10px;
    padding: 1em;
    transition: .3s background;
    &:hover, &:focus{
        background: #eae6e6;
        font-weight: bold;
}
`
function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const {login: logIn} = useAuth()
    
    const history = useHistory()

    const formHandler = (event) =>{
        let {name, value} = event.target
        setData({...data, [name]: value})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        setLoading(true)
        if(passwordCheck(data.password)){
            try{
                await logIn(data.email, data.password)
                setLoading(false)
                history.push('/dashboard')
            }catch(e){
                setLoading(false)
                setError('Connection error')
            }
        } else {
            setLoading(false)
            setError('please check your password')
        }
    }

    return (
        <form onSubmit={handleSubmit}  style={{position: 'absolute', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <Container>
                <TitleTab>Login</TitleTab>
                {error !== '' && <ErrorTab>{error}</ErrorTab>}
                    <CustomInput name='email' label='Email' handleChange={formHandler} value={data.email}/>
                    <CustomInput name='password' label='Password' handleChange={formHandler} value={data.password}/>
                    <CustomButton disabled={loading}>Iniciar sesión</CustomButton>
                <Span>
                    <Link to='/signup'>¿Don´t have an account?</Link>
                </Span>
            </Container>
        </form>
    )
}

export default Login
