import React, {useState} from 'react'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'

import {useAuth} from '../../context/authContext'
import passwordCheck from '../../helpers/passwordCheck'

import CustomInput from '../../components/custom-input/custom-input'
import CustomButton from '../../components/custom-button'

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  max-width: 400px;
  padding: 1em;
  grid-gap: 1em;
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

const TitleTab = styled.div`
  padding: 1em;
  font-weight: bold;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Span = styled.div`
  padding: 1em;
`

const SignUp = ()=>{
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const {signup: signUp} = useAuth()
  const history = useHistory()
  
  const formHandler = (event)=>{
    let {name, value} = event.target
    setData({...data, [name]:value})
  }

  const checkPassword = (event)=>{
    let {value} = event.target
    if(!passwordCheck(value)) setError('Please use a more strong password') 
    if(passwordCheck(value) && error !== '') setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()    
    if (data.password === data.confirmPassword && passwordCheck(data.password)){
      try {
        setError('')
        setLoading(true)
        await signUp(data.email, data.password)
        history.push('/dashboard')
      }catch(e){
        if(e.code === 'auth/email-already-in-use') setError('The email its already being used')
        if(e.code !== 'auth/email-already-in-use') setError('Ups something went wrong')
      }

    }else {
      setError("There´s something wrong with the passwords")
    }
  }


  return (
    <form onSubmit={handleSubmit} style={{position: 'absolute', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <Container>
        <TitleTab>
          <h3>Sign Up</h3>
        </TitleTab>
        {error !== '' && <ErrorTab>{error}</ErrorTab>}
          <CustomInput label='Email' name='email' value={data.email} handleChange={formHandler} comment='example@example.com' required/>
          <CustomInput label='Password' name='password' value={data.password} handleChange={formHandler} onBlur={checkPassword} comment='the password has to be longer than 8 characters, at least 1 mayus character, 1 especial caracter' required/>
          <CustomInput label='Confirm password' name='confirmPassword' value={data.confirmPassword} handleChange={formHandler} required/>
        <CustomButton disabled={loading}>Register</CustomButton>
        <Span>
          <Link to='/login'>¿Already have an account?</Link>
        </Span>
      </Container>
    </form>
  )
}


export default SignUp