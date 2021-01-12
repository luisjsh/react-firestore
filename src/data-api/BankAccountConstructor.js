import {db} from '../firebase'

export default function BankAccount (currentUser){
  this.set = async ({name, moneyAvailable, type, userId}) =>{
    if (name === '' || moneyAvailable === '' || type === '') return 'not null'
    
      try{
        await db.collection('bankAccount').doc(name).set({
          name, 
          moneyAvailable, 
          type, 
          userId: userId ? userId : currentUser}
          ,)
        return 'saved succesfully'

      }catch (e){
          return 'error'
      }

  }

  this.destroy = async (bankAccountId)=>{
    try{
      await db.collection('bankAccount').doc(bankAccountId).delete()
      return 'deleted succesfully'
    }catch(e){
      return 'error'
    }
  }

  this.get = async () =>{
    let bankAccountArray = []
    try{
      await db.collection("bankAccount")
          .where("userId", "==", currentUser)
          .get()
          .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              bankAccountArray = [...bankAccountArray, doc.data()]
          });
      });
      return bankAccountArray     
    } catch(e){
      return 'error'
    }
  }

  this.getBankAccountByName = async (bankAccountName)=>{
    let bankAccountData = {}
    try{
      await db.collection("bankAccount")
          .doc(bankAccountName)
          .get()
          .then(function(querySnapshot) {
            bankAccountData = querySnapshot.data()
      });
      return bankAccountData     
    } catch(e){
      return 'error'
    }
  }

  this.getBankAccountProfileByName = async (name) =>{
    let bankAccountData = {}
    let transactions = []
    try{
      await db.collection("bankAccount")
          .doc(name)
          .get()
          .then(function(querySnapshot) {
            bankAccountData = querySnapshot.data()
      });

      await db.collection('bankAccount')
      .doc(name)
      .collection('transactions')
      .orderBy('addedAt', 'desc')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            transactions = [...transactions, doc.data()]
        });
      })

      bankAccountData = {...bankAccountData, transactions: transactions}
    } catch(e){
      return 'error'
    }

    return bankAccountData
  }

  this.getBankAccountsNames = async ()=>{
    let bankAccounts = await this.get()
    let bankAccountsNames = []
    
    let i=0
    bankAccounts.forEach( ({name})=>{
      bankAccountsNames.push({id: i, name})
      i++;
    })
    return bankAccountsNames
  }


  this.getMoneyAvailable = async ( )=>{
    let bankAccounts = await this.get()
    let moneyAvailableGlobal = 0
    bankAccounts.forEach( ({moneyAvailable})=>{
      moneyAvailableGlobal = moneyAvailableGlobal + parseInt(moneyAvailable)
    })
    return moneyAvailableGlobal
  }



  this.setTransaction = async ({
    subject,
    bankAccountName,
    type,
    moneySpent,
    date
  })=>{
    let bankAccount = await this.getBankAccountByName(bankAccountName)

    let moneyLeft = 0

    if(type === 'deposit'){
      moneyLeft = parseInt(bankAccount.moneyAvailable) + parseInt(moneySpent)
    }

    if(type === 'withdraw'){
      moneyLeft = parseInt(bankAccount.moneyAvailable) - parseInt(moneySpent)
    }
    await this.set({
      name: bankAccount.name,
      moneyAvailable: moneyLeft,
      type: bankAccount.type,
      userId: bankAccount.userId
    })

    await this.setLatestTransaction({
      subject,
      bankAccountName,
      type,
      moneySpent,
      moneyPreviously: `${bankAccount.moneyAvailable}`,
      date
    })

    try {
      await db.collection('bankAccount').doc(bankAccountName).collection('transactions').doc(subject).set({
        subject,
        type,
        moneySpent,
        bankAccountName, 
        addedAt: new Date(), 
        moneyPreviously: `${bankAccount.moneyAvailable}`,
        date
      },{merge: true})
      return "succesfully"
    }catch(e){
      return 'error'
    }
  }

  this.setLatestTransaction = async ({
      date, 
      bankAccountName, 
      subject, 
      moneySpent, 
      type, 
      moneyPreviously, 
      userId})=>{
    try{
      await db.collection('latestTransactions').doc(subject).set({
        subject,
        moneySpent,
        moneyPreviously,
        type,
        bankAccountName,
        date,
        addedAt: new Date(), 
        userId: userId ? userId : currentUser}
        )
      await this.setDashboard()
      return 'saved succesfully'

    }catch (e){
        return 'error'
    }
  }

  this.setDashboard = async (userId)=>{
    let BankAccountsArray = await this.get()
    let MoneyLeftOnAccount = await this.getMoneyAvailable()
    let latestTransactionsArray = []

    await db.collection("latestTransactions")
    .orderBy('addedAt', 'desc')
    .where("userId", "==", currentUser)
    .limit(4)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        latestTransactionsArray = [...latestTransactionsArray , doc.data()]
      });
    })
    try{
      await db.collection('dashboard').doc('dashboard').set({
        BankAccountsArray,
        moneyAvailable: MoneyLeftOnAccount,
        latestTransactionsArray,
        userId: userId ? userId : currentUser}
        )
      return 'saved succesfully'

    }catch (e){
      return 'error'
    }    
  }

  this.getDashboard = async ()=>{
    let dashboardData = false

    try{
      await db.collection("dashboard")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          dashboardData = doc.data()
        });
      })
    }catch(e){
      console.log(e)
      dashboardData = "error"
    }
  
    return dashboardData
  }

  this.getTransaction = async (bankAccount, subject)=>{
    let transactionData = false

    try{
      await db.collection("bankAccount")
      .doc(bankAccount)
      .collection('transactions')
      .doc(subject)
      .get()
      .then(function(querySnapshot) {
        transactionData = querySnapshot.data()
      })
    }catch(e){
      transactionData = 'error'
    }
    if(!transactionData) return 'not added'
    if(transactionData) return transactionData
  }

  this.deleteTransaction = async (bankAccount, subject, moneySpent, type) => {
    let bankAccountData, moneyOnAcccount
 
    try {
      bankAccountData = await this.getBankAccountByName(bankAccount)
    } catch(e){
      return 'error'
    }

    try{
      let {moneyAvailable} = bankAccountData
      let moneySpentInt = parseInt(moneySpent)

      if(type === 'withdraw'){
        moneyOnAcccount = moneySpentInt + moneyAvailable
      }

      if(type === 'deposit'){
        moneyOnAcccount = moneySpentInt - moneyAvailable
      }
    }catch(e){
      return 'error'
    }
  
    try{
      await db.collection("latestTransactions")
      .doc(subject)
      .get()
      .then(async function(querySnapshot) {
        await querySnapshot.ref.delete()
      })
    }catch(e){
      return 'error'
    }
    
    try{
      await db.collection("bankAccount")
      .doc(bankAccount)
      .collection('transactions')
      .doc(subject)
      .get()
      .then(async function(querySnapshot) {
        await querySnapshot.ref.delete()
      })
    } catch(e){
      return 'error'
    }


    this.set({
      name: bankAccountData.name,
      type: bankAccountData.type,
      moneyAvailable: moneyOnAcccount,
      userId: bankAccountData.userId
    })

    return await this.setDashboard(bankAccountData.userId)
  }

  this.getTransactions = async ()=>{
    let transactionsArray = []
    try{
      await db.collection('latestTransactions')
      .orderBy('addedAt', 'desc')
      .where('userId', '==', currentUser)
      .get()
      .then(async function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          transactionsArray = [...transactionsArray, doc.data()]
        });
      })
      return transactionsArray
    } catch(e){
      return 'error'
    }
  }

} 