class BowlingGame{
    frame =10
    score=0
    constructor(){
       
    }

    play(pins){
        if(pins.length==20){
            let counter=0
            for (let index = 0; index < this.frame; index++) {
                if(pins[counter]==10){
                    this.score += pins[counter]+pins[counter+2]+pins[counter+3]
                    counter+=2;
                }
                else if(pins[counter]+pins[counter+1]==10){
                    this.score += pins[counter]+pins[counter+1]+pins[counter+2]
                    counter+=2;
                }
                else{
                    this.score += pins[counter]+pins[counter+1]
                    counter+=2;
                }
            }
        }
        else{
        //TODO : if he gets a strike in the last frame
        }
        
    }
    getScore() {
        return this.score
    }

};
module.exports =BowlingGame