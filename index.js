// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>String Reverse Stack</h1>`;
const resultDiv = document.getElementById('result');
let results = "";

class Stack{
  
  constructor(){
    this.items = [];
  }
   
  addToStack(element){
    this.items.push(element);
  }
  
  popFromStack(){
    if(this.items.length==0){
      return "Underflow";
    }
    return this.items.pop();
  }
  
  isEmpty(){
    return this.items.length==0;
  }
  
}

function reverseString(reversedWord){
  let stack = new Stack();
  let reversedString = "";
  for(let i=0;i<reversedWord.length; i++){
    stack.addToStack(reversedWord[i]);
  };
  while(!stack.isEmpty()){
    reversedString = reversedString + stack.popFromStack();;
  }
  console.log(reversedString);
  results = results + "<h3>"+reversedString+"</h3>";
  resultDiv.innerHTML = results;
}

results = "String To be reversed: <h4>ABCDEFGHIJK</h4>";
reverseString("ABCDEFGHIJK");