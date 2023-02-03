const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field){
        this.field = field;
        this.user_location = {
            x:0,
            y:0
        };
    }

    print(){
        this.field.forEach(element => {
            console.log(element.join(''))
        });
    }

    checkWin(){
        
    }

    checkLost(){

    }

    static generateField(){
        
    }

    inputLoop(){
        
        while(this.checkLost() || this.checkWin){
            console.clear()
            this.print();
            let dir = prompt("Wich way? ");

            switch(dir){
                case 'l':
                    this.user_location.y -= 1;
                    break;
                case 'r':
                    this.user_location.y += 1;
                    break;
                case 'u':
                    this.user_location.x -= 1;
                    break;
                case 'd':
                    this.user_location.x += 1;
                    break;
            }
            let {x,y} = this.user_location;
            this.field[x][y] = pathCharacter;    
        }
        
    }
}

    

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.inputLoop()


