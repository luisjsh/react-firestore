import useBankAccount from './BankAccountConstructor'

test('save or update bank account', async () =>{
  let bankAccount = new useBankAccount('123123')

  expect(await bankAccount.set({
    name: 'test',
    money: '100',
    type: 'checking'
  },)).toBe('saved succesfully')
})

test('save or update bank account', async () =>{
  let bankAccount = new useBankAccount('123123')

  expect(await bankAccount.set({
    name: 'test',
    money: '',
    type: ''
  },)).toBe('not null')
})

test('save or update bank account', async () =>{
  let bankAccount = new useBankAccount('123123')

  expect(await bankAccount.set({
    name: '',
    money: '1212',
    type: 'saving'
  },)).toBe('not null')
})

test('delete bank account', async ()=>{
  let bankAccount = new useBankAccount('123123')

  expect(await bankAccount.destroy('oUiigmKyYCVkkZWMdxcO')).toBe('error')
})

test('get all the money available', async ()=>{
  let bankAccount = new useBankAccount('123123')
  let expectNumber = await bankAccount.getMoneyAvailable()

  expect(typeof expectNumber).toBe('number')
})

test('set transaction', async ()=>{
  let bankAccount = new useBankAccount('123123')
  let expectNumber = await bankAccount.setTransaction({
    subject: 'Exchange',
    bankAccountId: 'WBzfW5sHoK5niFvShXxM',
    type: 'withdraw',
    moneySpent: 100,
    date: '10-13-2020'
  })
  expect(expectNumber).toBe('Succesfull')
})