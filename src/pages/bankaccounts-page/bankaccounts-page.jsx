import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import useWidth from '../../helpers/useWidth'
import {useAuth} from '../../context/authContext'
import BankAccountConstructor from '../../data-api/BankAccountConstructor'

import Mobile from './responsive/mobile'
import Desktop from './responsive/desktop.jsx'

function BankAccounts() {
    let width = useWidth()
    const [bankAccountsArray, setBankAccountsArray] = useState(false)
    const history = useHistory()
    const {currentUser} = useAuth()
    
    useEffect(() => {
        const getBankAccounts = async ()=>{
            let bankAccount = new BankAccountConstructor(currentUser.uid)
            setBankAccountsArray(await bankAccount.get())
        }

        getBankAccounts()
        return () => {
            setBankAccountsArray([])
        }
    }, [])
    
    const handleClickBankAccount = (name) => {
        history.push(`/bank-account/${name}`)
    }

    let state = {
        bankAccountsArray,
        handleClickBankAccount
    }

    if(width < 500) return <Mobile {...state}/>

    if(width >= 500) return <Desktop {...state}/>

}

export default BankAccounts