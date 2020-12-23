import {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

import useWidth from '../../helpers/useWidth'
import BankAccountConstructor from '../../data-api/BankAccountConstructor'

import Mobile from './responsive/mobile'
import Desktop from './responsive/desktop'

function BankAccountPage() {
    let width = useWidth()
    let {id} = useParams() 
    let history = useHistory()
    const [bankAccountData, setBankAccountData] = useState([])

    useEffect(() => {
        let getBankAccountData = async ()=>{
            let BankAccount = new BankAccountConstructor()
            let bankAccountInfo = await BankAccount.getBankAccountProfileByName(id)
            if(bankAccountInfo === 'not added'){
                return history.push('/dashboard')
            } else {
                setBankAccountData(bankAccountInfo)
            }
        }

        getBankAccountData()
        return () => {
            setBankAccountData([])
        }
    }, [id])

    const handleClick = (bankAccountName, transactionName)=>{
        history.push(`/transaction/${bankAccountName ? bankAccountName : 'no-name'}-${transactionName ? transactionName : 'no-name'}`)
    }

    let state = {
        ...bankAccountData,
        handleClick
    }

    if(width < 500) return <Mobile state={state}/>

    if(width > 500) return <Desktop state={state}/>
}

export default BankAccountPage
