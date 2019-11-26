
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

const reverseString = (reversedWord) => {
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

export { reverseString };


  // results = results + "<h3>"+reversedString+"</h3>";
  // resultDiv.innerHTML = results;

// results = "String To be reversed: <h4>ABCDEFGHIJK</h4>";
// reverseString("ABCDEFGHIJK");