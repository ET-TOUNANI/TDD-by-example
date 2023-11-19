
const password=require('./password')


describe('Password input field validation',()=>{

    it('should be at least 8 characters', () => {
        expect(password('12Aa')).toBe('Password must be at least 8 characters')
    });
   
    it('should be contain at least 2 numbers', () => {
        expect(password('Aaaaabbbb')).toBe('The password must contain at least 2 numbers')
    });

    it('should handle multiple validation errors', () => {
        expect(password('Aaaa')).toBe('Password must be at least 8 characters\nThe password must contain at least 2 numbers')
    });

    it('should be contain at least 2 numbers', () => {
        expect(password('Aaa12aabbbb')).toBe(true)
    });

    it('should contain a capital letter', () => {
        expect(password('aaaaa12bbbbb')).toBe('Password must contain at least one capital letter')
    });
    
})