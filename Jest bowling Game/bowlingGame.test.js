const BowlingGame = require('./bowlingGame');


describe('Bowling game kata',()=>{
    let game;
    beforeEach(()=>{
        game =new BowlingGame()
    })

    it('makes game', () => {
        expect(game).toEqual(new BowlingGame())
    });

    it('should return score of 10 when knock down 1 pin in each frame', () => {
        game.play([1,1 ,1,1 ,1,1 ,1,1 ,1,1 ,1,1 ,1,1 ,1,1 ,1,1 ,1,1])
        expect(game.getScore()).toBe(20)
    });

    it('should return the sum of the pins knocked down', () => {
        game.play([2,3 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0])
        expect(game.getScore()).toBe(5)
    });

    it('should return 16 if he knocked down 5 and 5 and 3', () => { // spare case
        game.play([5,5 ,3,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0])
        expect(game.getScore()).toBe(16)
    });

     it('should return 18 if he knocked down a strike and 3 , 1', () => { // spare case
        game.play([10,0 ,3,1 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0])
        expect(game.getScore()).toBe(18)
    });
    
     it('should return 18 if he knocked down a strike and 3 in the last frame', () => { // spare case
        game.play([0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,0,0 ,10,0 ,3])
        expect(game.getScore()).toBe(13)
    });

})