

function fizzBuzz(number){
    let result=''
    if(number ==0)
      return 'number should not be 0'
    if(number%3==0)
        result+='Fizz'
    if(number%5==0)
        result+='Buzz'
    return result
}
module.exports=fizzBuzz