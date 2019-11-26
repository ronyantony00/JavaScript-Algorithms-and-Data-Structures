// Import stylesheets
import './style.css';
//import modules
import { reverseString } from './String_Reverse_Using_Stack/index.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `JavaScript Algorithms And Data Structures`;

const resultDiv = document.getElementById('result');
const overlayDiv = document.getElementById('resultOverlay');
const closeIconDiv = document.getElementById('closeIcon');
resultDiv.style.display = "none";
overlayDiv.style.display = "none";
closeIconDiv.style.display = "none";

window.stringReverseUsingStack = () => {
  let result = reverseString("ABCDEFGHIJK");
  let title  = "String Reverse Using Stack Data Structure";
  let content = "String to be reversed: <h4>ABCDEFGHIJK </h4><br/><br/>"
  let resultContent = "Reversed String: <h3>"+result+"</h3>";
  showResultView(title,content,resultContent);
}


let showResultView = (title,content,result) => {
  resultDiv.style.display = "block";
  overlayDiv.style.display = "block";
  closeIconDiv.style.display = "block";
  resultDiv.innerHTML = '<div class="result_title">'+title+'</div><div class="result_content">'+content+'</div><div class="result_answer">'+result+'</div>';
}

window.closeResult = () => {
  resultDiv.style.display = "none";
  overlayDiv.style.display = "none";
  closeIconDiv.style.display = "none";
}