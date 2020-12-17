import React, {useState, useEffect} from 'react'

import useWidth from '../../helpers/useWidth'
import {useAuth} from '../../context/authContext'
import BankAccountConstructor from '../../data-api/BankAccountConstructor'

import Mobile from './responsive/mobile-view'
import Desktop from './responsive/desktop-view'

function Dashboard() {
    const width = useWidth()
    const {currentUser} = useAuth()
    const [dashboardInformation, setdashboardInformation] = useState({
        moneyAvailable: 0,
        BankAccountsArray: [],
        latestTransactionsArray: []
    })

    
    useEffect(async ()=>{
        let bankAccount = new BankAccountConstructor(currentUser.uid)

        let updateInformationAvailable = async ()=>{
            setdashboardInformation(await bankAccount.getDashboard())
        }
        updateInformationAvailable()
        return ()=>{
            setdashboardInformation({
                moneyAvailable: 0
            })
        }
    }, [currentUser.uid])


    let state = {
        ...dashboardInformation
    }

    if(width <= 500) return <Mobile state={state}/>


    if(width > 500) return  <Desktop state={state}/>
    
}

export default Dashboard
