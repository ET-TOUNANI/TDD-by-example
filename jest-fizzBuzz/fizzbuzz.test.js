const fizzBuzz = require('./fizzbuzz')

describe('FizzBuzz Game',()=>{

    it('multiple of 3 should return Fizz',()=>{
     expect(fizzBuzz(6)).toBe('Fizz');
    })

    it('multiple of 5 should return Buzz',()=>{
     expect(fizzBuzz(10)).toBe('Buzz');
    })

    it('multiple of 5 and 3 should return FizzBuzz',()=>{
     expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    it('0 should throw an exception',()=>{
     expect(fizzBuzz(0)).toBe('number should not be 0');
    })


})
