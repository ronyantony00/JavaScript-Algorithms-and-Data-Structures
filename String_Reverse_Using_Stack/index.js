
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

let reverseString = (reversedWord) => {
  let stack = new Stack();
  let reversedString = "";
  for(let i=0;i<reversedWord.length; i++){
    stack.addToStack(reversedWord[i]);
  };
  while(!stack.isEmpty()){
    reversedString = reversedString + stack.popFromStack();
  }
  return reversedString;
}

const stringReverseUsingStack = () => {
  let result = reverseString("ABCDEFGHIJK");
  let resultHTML = 
  '<div class="result_title">String Reverse Using Stack Data Structure</div>'+
  '<div class="result_content">String to be reversed: <h4>ABCDEFGHIJK </h4><br/></div>'+
  '<div class="result_answer"> Reversed String: <h3>'+result+'</h3></div>';
  return resultHTML;
}



export { stringReverseUsingStack };