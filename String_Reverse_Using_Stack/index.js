
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
  let title  = "String Reverse Using Stack Data Structure";
  let content = "String to be reversed: <h4>ABCDEFGHIJK </h4><br/>"
  let resultContent = "Reversed String: <h3>"+result+"</h3>";
  let resultHTML = '<div class="result_title">'+title+'</div><div class="result_content">'+content+'</div><div class="result_answer">'+resultContent+'</div>';
  return resultHTML;
}



export { stringReverseUsingStack };