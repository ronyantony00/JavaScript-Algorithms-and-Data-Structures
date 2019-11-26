// Import stylesheets
import './style.css';
//import modules
import { reverseString } from './String_Reverse_Using_Stack/index.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `JavaScript Algorithms And Data Structures`;

let stringReverseUsingStack = () => {
  let result = reverseString("ABCDEFGHIJK");
  let title  = "String Reverse Using Stack Data Structure";
  let content = "String to be reversed: <h4>ABCDEFGHIJK </h4><br/><br/>"
  let resultContent = "Reversed String: <h3>"+result+"</h3>";
  showResultView(title,content,resultContent);
}

let showResultView = (title,content,result) => {

}