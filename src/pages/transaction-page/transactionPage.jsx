import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import useWidth from '../../helpers/useWidth'
import BankAccountConstructor from '../../data-api/BankAccountConstructor'

import LoadingPage from '../../components/loading/loading'
import Mobile from './responsive/mobile-view.jsx'
import Desktop from './responsive/desktop-view.jsx'


function TransactionPage() {
    const width = useWidth()
    const {bankAccount, id} = useParams()
    const [loading, setLoading] = useState(true)
    const [transaction, setTransaction] = useState([])

    
    useEffect(() => {
        let getInfo = async ()=>{
            let BankAccount = new BankAccountConstructor()
            setTransaction(await BankAccount.getTransaction(bankAccount, id))
        }

        getInfo()
        setLoading(false)
        return () => {
            setTransaction([])
        }
    }, [bankAccount, id])

    let state = {
        ...transaction
    }

    if(loading) return (
        <LoadingPage />
    )

    if(width < 500) return <Mobile state={state}/>
    

    if(width > 500) return <Desktop state={state}/>

    return <div>
        sadsajdnaskdjn
    </div>
}

export default TransactionPage