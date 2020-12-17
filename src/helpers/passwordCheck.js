export default function passwordCheck(password){
   let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*-]{8,}$/
    if(password.length < 8 || !regularExpression.test(password)) return false 
    else return true
}