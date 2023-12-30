/* the foundations for javascript (from nothing to operators)

let name = "hamd"
console.log(name);
let person = {
    name:"hamd",
    Age:20,
    hoppy:"diving"
};
// it's like dictionary id python
person.hoppy = "Diving"
//that's  how to change anything in the object
console.log(person.hoppy)


const myBoolean = true;
const myString = 'hello world';
const firstNumber = 20; // const means you can't change the vaule later you can use it with any vaules like: str, int ,bool,obj.
let secondNumber = 40; // let means you can change the value later like the thing are above it.
secondNumber = 80;
const myArray = [myBoolean,myString]
sum = firstNumber + secondNumber
const myObject = { // it's like the dict in python but it little bit defferent
    firstObject:{ myArray},
    sumProperty:{sum}
}
console.log(myObject)
console.log(myObject.sumProperty)
console.log(myObject.firstObject.myArray[1])
const anotherObj = {
    firstObject:{myArray},
    sumProperty: {sum}
}
anotherArray = [myBoolean, myString]
console.log(anotherObj === myObject) // when compare between two objects or arrays you can't do that
console.log(myArray[0] === anotherArray[0])
secondNumber = 20;
const result = firstNumber === secondNumber ? "it's complex": " it super complex"; // It works like if and else after the ? mark its the answer of if and the vaule after: it's for the else answear.
console.log(result)
(firstNumber === secondNumber || person.Age === secondNumber ); // && it means and , || means or , ! not.
*/
/* some challanges for beginner
// challenge 1 
let numberVariable = 0;
numberVariable++;
numberVariable++;
numberVariable++;
console.log(numberVariable)
//Challenge 2
const fNumber = 20;
const sNumber = "20";
const reslt = fNumber === sNumber;
console.log(reslt)
// the answer yes (read the under line for understand.)
// it should be let not const because he asked for if we reapet those codes again it will be the same result.
// chanllenge 3 
const expression1 = 100% 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = ! expression4;
console.log(expression5)
const expression6 = !(((100 % 50)< 100 / 50) && 300 + 5 === 305)
console.log(expression6)
// it asked you what is the result and asked you to put all this in a line.
// Chanllenge 4 
const theObj ={
    prop: 'first value',
    prop2: 20
}

const theArray = [40,50,2]
const Result = theObj.prop2 === (theArray[0] / theArray[2]);
console.log("fdf"+Result)
// It chanllenge you if y can do it without review the last lessons.
// Chanllenge 5 
const OBJ ={
    object1: {
        price: 100,
        quantity: 5
    },
    object2:{
        price: 150,
        quantity:2
    }
}
const Array = [OBJ.object1, OBJ.object2]// y can put objs in Arrays 

const notResult = (Array[0].price * Array[0].quantity) > (Array[1].price * Array[1].quantity);   // y can use the objects and their childern in arrays.
console.log(notResult)*/
let userString = 22
if (userString >= 5){
    console.log("what's happening here")
}
const colors = ['orange','apple',"tomato", 'struwberry'];

const randomIndex = Math.floor(Math.random() * colors.length);

const choseColor = colors[randomIndex]
switch(choseColor){ //this is using when y need alot of choices instead using if-elseif-else alot,just using switch.
    case "orange":
        console.log('this is an orange');
        break;
    case 'apple':
        console.log('this is an apple.');
        break;
    case 'struwberry':
        console.log('this is a struwberry.');
        break;
    case 'tomato':
        console.log('this is a tomato');
        break;
    default:
        console.log('all akbar ala bshar al-asd.');
        break;
}







