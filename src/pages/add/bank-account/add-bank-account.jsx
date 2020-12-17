import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import {useAuth} from '../../../context/authContext'
import BankAccountConstructor from '../../../data-api/BankAccountConstructor'

import {ErrorTab} from '../../../components/errortab'
import CustomInput from '../../../components/custom-input/custom-input'
import CustomButton from '../../../components/custom-button'
import CustomSelect from '../../../components/custom-select'

const Title = styled.div`
    font-weight: 300;
    font-size: 25px;
    text-align: center;
    padding: 1em 0;
`

const Container = styled.section`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
`


function AddBankAccount() {
    const [data, setData] = useState({
        name: '',
        moneyAvailable: '',
        type: ''
    })

    const [error, setError] = useState('')
    
    const [loading, setLoading] = useState(false)

    const [checkedBankAccount, setCheckedBankAccount] = useState(false)

    const history = useHistory()
    
    const {currentUser} = useAuth()

    const formHandler= (event)=>{
        let {name, value} = event.target
        setData({...data, [name]:value})
    }

    const checkBankAccountName = async (event)=>{
        setError('')
        let {value} = event.target
        let bankAccount = new BankAccountConstructor(currentUser.uid)
        let bankAccountNames = await bankAccount.getBankAccountsNames()
        
        let checkNames = bankAccountNames.find( ({name})=>{
            return value === name
        })
        if(checkNames) setError('The bank account its already on the database')
        if(!checkNames) setCheckedBankAccount(true)
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        setLoading(true)
        setError('')
        
        if(!checkedBankAccount){
            return setError('The bank account its already on the database')

        } else {

            let bankAccount = new BankAccountConstructor(currentUser.uid)
            let {name, moneyAvailable, type} = data
            
            if(name === '' || moneyAvailable === '' || type === '') return setError('It looks like some data its missing')
            
        
            let result = await bankAccount.set(data)

            if(result === 'saved succesfully') return history.push('/dashboard')
            if(result === 'error'){
                setLoading(false)
                return setError('It looks like something its wrong')
            }
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Container>
                <Title>ADD BANK ACCOUNT</Title>
                {error !== '' && <ErrorTab>{error}</ErrorTab>}
                <CustomInput 
                    name='name' 
                    label='Name' 
                    value={data.name} 
                    handleChange={formHandler} 
                    onBlur={checkBankAccountName}
                    required/>

                <CustomInput 
                    name='moneyAvailable' 
                    label='Money available' 
                    type='number'
                    icon='dolar'
                    value={data.moneyAvailable} 
                    handleChange={formHandler} 
                    required
                    /> 

                <CustomSelect 
                    name='type'
                    label='Account type'
                    comment='Savings / checking' 
                    handleChange={formHandler}
                    required>
                        <option>Checking</option>
                        <option>Saving</option>
                </CustomSelect>

                <CustomButton disabled={loading}>Save</CustomButton>
            </Container>
        </form>
    )
}

export default AddBankAccount