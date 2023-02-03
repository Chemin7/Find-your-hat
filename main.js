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
        let {x,y} = this.user_location;
        if(this.field[x][y] == hat){
            console.log("You WIN!!");
            return true;
        }else{
            return false;
        }
    }

    checkLost(){
        let {x,y} = this.user_location;
        let row_length = this.field.length;
        let column_length = this.field[0].length;
        console.log("X: ",x ," Y: ",y)
        if(x < 0 || x >= row_length || y < 0 || y >= column_length || this.field[x][y] == hole){
            console.log("You Lose!!")
            return true;
        }else{
            return false;
        }
    }

    static generateField(){
        
    }

    inputLoop(){
        let flag = true;
        while(flag){
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
            
            if(this.checkLost() || this.checkWin()){
                flag = false
            }
            else{
                let {x,y} = this.user_location;
                this.field[x][y] = pathCharacter;
            }
            
        }
        
    }
}

    

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.inputLoop()


