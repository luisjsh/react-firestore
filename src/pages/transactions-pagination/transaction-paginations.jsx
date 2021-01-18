import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import useWidth from '../../helpers/useWidth'
import {useAuth} from '../../context/authContext'
import BankAccountConstructor from '../../data-api/BankAccountConstructor'

import Mobile from './responsive/mobile'
import Desktop from './responsive/desktop'

function TransactionPagination() {
    let width = useWidth()
    const [transactionsArray, setTransactionArray] = useState(false)
    const history = useHistory()
    const {currentUser} = useAuth()
    
    useEffect(() => {
        document.title = `Finances - transactions`
        const getTransactions=async ()=>{
            let userData = new BankAccountConstructor(currentUser.uid)
            setTransactionArray([...await userData.getTransactions()])
        }
        getTransactions()
    }, [currentUser])

    const handleClickTransaction = (bankAccountName, transactionName) => {
        history.push(`/transaction/${bankAccountName ? bankAccountName : 'no-name'}-${transactionName ? transactionName : 'no-name'}`)
    }

    let state = {
        transactionsArray,
        handleClickTransaction
    }
    if(width < 500) return <Mobile {...state}/>

    if(width >= 500) return <Desktop {...state}/>
}

export default TransactionPagination