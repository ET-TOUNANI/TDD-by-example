function password(pass){
    let message =true
    if(pass.length<8)// check length
        message= lengthError
    if(getTotalNumbers(pass)<2)//check total numbers 
        message= (message==true)?numberError:message+'\n'+numberError
    
    if(!isContainingCapitalLeter(pass))// check if contains a capital letter
    message= (message==true)?capitalError:message+'\n'+capitalError
    
    
    return message
}


const lengthError='Password must be at least 8 characters'
const numberError='The password must contain at least 2 numbers'
const capitalError='Password must contain at least one capital letter'


module.exports=password


function getTotalNumbers(pass){
    let n=0
    for (let index = 0; index < pass.length; index++) {
        let a=parseInt(pass[index])
        if(!isNaN(a))
            n++
    }
    return n
}
function isContainingCapitalLeter(pass){
    let capital=false
    for (let index = 0; index < pass.length; index++) {
        if(pass[index]==pass[index].toUpperCase() && isNaN(parseInt(pass[index])))
        capital=true 
    }
    return capital
}