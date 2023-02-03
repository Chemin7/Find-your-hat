const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field){
        this.field = field;
        this.user_location = [0,0];
    }

    print(){
        this.field.forEach(element => {
            console.log(element.join(''))
        });
    }

    checkWin(){}

    checkLost(){

    }

    

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print()

let dir = prompt("Wich way? ")