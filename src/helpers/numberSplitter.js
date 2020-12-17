export default function splitNumber(number){
    let formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    })
    return formatter.format(number)
}
