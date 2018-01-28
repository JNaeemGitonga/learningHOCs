let maria = [3,2,10,8,0,14];
let andrea = [9,6,2,1,5,3]

let evenOdd = Math.floor((Math.random() * 2 ) + 1) === 2 ? 'even' : 'odd';

const game = (maria,andrea,mScr, aScr) => {
    
    let mariaScore = mScr;
    let andreaScore = aScr;
    let numOfGames = maria.length;
    let index = Math.floor((Math.random() * (numOfGames - 1)) + 0)
    
    if(numOfGames >= 1) {
        
        if (numOfGames === 1) {
            mariaScore += maria[0] - andrea[0];
            andreaScore += andrea[0] - maria[0];
            mariaScore > andreaScore ?  console.log(`Maria wins with ${mariaScore} points!`) :  console.log(`Andrea wins with ${andreaScore} points`)
            return
        }
          
        else if (evenOdd === 'even' && index % 2 === 0 ) {
            mariaScore += maria[index] - andrea[index];
            andreaScore += andrea[index] - maria[index];
            maria.splice(index,1),andrea.splice(index,1)
            game(maria,andrea,mariaScore,andreaScore)
        }

        else if (evenOdd === 'odd' && index % 2 > 0) {
            mariaScore += maria[index] - andrea[index];
            andreaScore += andrea[index] - maria[index];
            maria.splice(index,1),andrea.splice(index,1)
            game(maria,andrea,mariaScore,andreaScore)
        }
    
        else {
            game(maria,andrea,mariaScore,andreaScore)
        }
    }
}

game(maria,andrea,0,0)
