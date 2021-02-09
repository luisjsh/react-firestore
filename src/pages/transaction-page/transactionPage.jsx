import {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'

import {useAuth} from '../../context/authContext'
import useWidth from '../../helpers/useWidth'
import BankAccountConstructor from '../../data-api/BankAccountConstructor'

import LoadingPage from '../../components/loading/loading'
import Mobile from './responsive/mobile-view.jsx'


function TransactionPage() {
    const width = useWidth()
    const {currentUser} = useAuth()
    const {bankAccount, id} = useParams()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [transaction, setTransaction] = useState([])
    const history = useHistory()

    useEffect(() => {
        let getInfo = async ()=>{
            let BankAccount = new BankAccountConstructor()
            let transactionInfo = await BankAccount.getTransaction(bankAccount, id)

            if(transactionInfo === 'not added'){
                return history.push('/dashboard')
            } else {
                setTransaction(transactionInfo)
            }
        }
        getInfo()
        setLoading(false)
        
        
        return () => {
            setTransaction([])
        }
    }, [history, bankAccount, id])


    const handleDelete = async (bankAccountName, subject, moneySpent, type) =>{
        let BankAccount = new BankAccountConstructor(currentUser.uid)
        try{
            let deleteResult = await BankAccount.deleteTransaction(bankAccountName, subject, moneySpent, type)
            if(deleteResult === 'saved succesfully') return history.push('/dashboard')
            if(deleteResult === 'error') return alert('error') 
        }catch(e){
            setError('Conection error')
        }
    }

    let state = {
        ...transaction,
        error,
        handleDelete
    }

    

    if(loading) return (
        <LoadingPage />
    )

    if(width <= 500) return <Mobile state={state}/>
    

    if(width > 500) return <Mobile state={state}/>
}

export default TransactionPage