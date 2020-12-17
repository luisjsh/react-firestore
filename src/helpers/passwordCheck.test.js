import passwordCheck from './passwordCheck'

test('dummy password: 12345', ()=>{
    let passwordPass = passwordCheck('12345')
    expect(passwordPass).toBe(false)
})

test('dummy password: 123456luis.', ()=>{
    let passwordPass = passwordCheck('123456luis.')
    expect(passwordPass).toBe(false)
})

test('dummy password: 123456Luis#', ()=>{
    let passwordPass = passwordCheck('123456Luis#')
    expect(passwordPass).toBe(true)
})