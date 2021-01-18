import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import {useAuth} from '../../../context/authContext'
import BankAccountConstructor from '../../../data-api/BankAccountConstructor'

import CustomInput from '../../../components/custom-input/custom-input'
import CustomButton from '../../../components/custom-button'
import CustomSelect from '../../../components/custom-select'
import {ErrorTab} from '../../../components/errortab'
import CustomDate from '../../../components/custom-date'

const Container = styled.div`
    padding: 1em;
    display: grid;
    grid-gap: 1em;
    max-width: 400px;
`

const Label = styled.p`
    margin: 0;
    padding: .3em;
    font-weight: bold;
    text-transform: capitalize;
`

const Title = styled.div`
    text-align: center;
    font-weight: bold;
`

const Wrapper =({label, children})=>{
    return (
        <div >
            {label && <Label>{label}</Label>}
            <div style={{display: 'grid', gridGap: '1em'}}>
            {children}
            </div>
        </div>
    )
}

function AddTransaction() {
    const [data, setData] = useState({
        subject: '',
        bankAccountName: '',
        type: '',
        moneySpent: '',
        date: ''
    })

    const [dateData, setDateData] = useState({
        day: '',
        month: '',
        year: ''
    })

    const [bankAccountsNamesLists, setbankAccountsNamesLists] = useState([])

    const [error, setError] = useState('')

    const {currentUser} = useAuth()

    const history = useHistory()
    
    useEffect( ()=>{
        document.title = `Finances - Add transaction`
        let bankAccount = new BankAccountConstructor(currentUser.uid)
        let getBankAccountNames = async ()=>{
            setbankAccountsNamesLists(await bankAccount.getBankAccountsNames())
        }

        getBankAccountNames()
    }, [currentUser.uid])
    

    const formHandler = (event)=>{
        let {name, value} = event.target
        if(name === 'day' || name === 'month' || name === 'year'){
            if(
                (name === 'year' && value.length <= 4) ||
                (name === 'month' && value.length <= 2) ||
                (name === 'day' && value.length <= 2)
            ) return setDateData({...dateData, [name]:value})
        } else {
            setData({...data, [name]:value})
        }
    }    

    const buttonHandler = async (event)=>{
        event.preventDefault()
        let {name} = event.target
        setData({...data, type:name})
    }

    const submitHandler = async (event)=>{
        event.preventDefault()
        setError('')

        let {day, month, year} = dateData
        let bankAccountObject = new BankAccountConstructor(currentUser.uid)
        let {subject, bankAccountName, type, moneySpent} = data

        if(subject === '' || bankAccountName === '' || type === '' || moneySpent === '') return setError('Some data is missing')
        try{
            let result = await bankAccountObject.setTransaction({
                subject,
                bankAccountName,
                moneySpent,
                type,
                date: `${day}-${month}-${year}`
            })

            if(result === 'succesfully') history.push('/dashboard')
            if(result === 'error') setError('Some data its missing')
        }catch(e){
            setError('Connection error')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <Container>
                <Title>ADD TRANSACTION</Title>
                {error !== '' && <ErrorTab>{error}</ErrorTab>}
                <CustomInput 
                    label='Subject' 
                    name='subject' 
                    handleChange={formHandler} 
                    value={data.subject} 
                    required/>
            <Wrapper label='type'>
                <CustomButton 
                    name='deposit'
                    type={data.type === 'deposit' ? 'success' : 'not-choosed-success'} 
                    handleClick={buttonHandler}>
                        Deposit
                    </CustomButton>
                    <CustomButton 
                    name='withdraw'
                    type={data.type === 'withdraw' ? 'failure' : 'not-choosed-failure'} 
                    handleClick={buttonHandler}>
                        Withdraw
                        </CustomButton>
            </Wrapper>

            <CustomSelect 
                    label='Bank Account' 
                    name='bankAccountName' 
                    handleChange={formHandler} 
                    value={data.bankAccountName} 
                    required>
                {
                    bankAccountsNamesLists.map( ({id, name})=>(
                    <option key={id} value={name}>{name}</option>
                    ))
                }
            </CustomSelect>

                <CustomInput 
                    type='number'
                    label='Money spent' 
                    name='moneySpent' 
                    icon='dolar'
                    handleChange={formHandler} 
                    value={data.moneySpent} 
                    required/>

               
               <CustomDate 
                    label='Date'
                    date={dateData}
                    handleChange={formHandler}
                    required
                    />

                <CustomButton>Save</CustomButton>
            </Container>
        </form>
    )
}

export default AddTransaction
