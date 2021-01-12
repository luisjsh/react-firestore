import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import useWidth from '../../helpers/useWidth'
import {useAuth} from '../../context/authContext'
import BankAccountConstructor from '../../data-api/BankAccountConstructor'

import ErrorPage from '../error-page/error-page'
import LoadingPage from '../../components/loading/loading'
import Mobile from './responsive/mobile-view'
import Desktop from './responsive/desktop-view'

function Dashboard() {
    const width = useWidth()
    const {currentUser} = useAuth()
    const history = useHistory()

    const [loading, setLoading] = useState(true)

    const [dashboardInformation, setdashboardInformation] = useState({
        moneyAvailable: 0,
        BankAccountsArray: [],
        latestTransactionsArray: []
    })
    

    useEffect(()=>{
        setLoading(true)
        
        let bankAccount = new BankAccountConstructor(currentUser.uid)

        let updateInformationAvailable = async ()=>{
            setdashboardInformation(await bankAccount.getDashboard())
        }
        updateInformationAvailable()

        setLoading(false)
        return ()=>{
            setdashboardInformation({
                moneyAvailable: 0
            })
        }
    }, [currentUser.uid])

    const handleClickTransaction = (bankAccountName, transactionName) => {
        history.push(`/transaction/${bankAccountName ? bankAccountName : 'no-name'}-${transactionName ? transactionName : 'no-name'}`)
    }
    const handleClickBankAccount = (name) => {
        history.push(`/bank-account/${name}`)
    }

    const handleRedirect =(name)=>{
        history.push(`/${name}`)
    }

    let state = {
        ...dashboardInformation,
        handleClickTransaction,
        handleClickBankAccount,
        handleRedirect
    }
    
    if(loading) return <LoadingPage />

    if(dashboardInformation === 'error') return <ErrorPage/>

    if(width <= 500) return <Mobile state={state}/>


    if(width > 500) return  <Desktop {...state}/>
    
}

export default Dashboard
