import numberSplitter from './numberSplitter'

test('its al right!', ()=>{
    expect(numberSplitter(1000).toBe('1,000.00'))
})