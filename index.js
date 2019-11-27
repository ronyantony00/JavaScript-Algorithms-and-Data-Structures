// Import stylesheets
import './style.css';
//import modules
import { stringReverseUsingStack } from './String_Reverse_Using_Stack/index.js';
import { binarySearch } from './Binary_Search/index.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `JavaScript Algorithms And Data Structures`;

const resultDiv = document.getElementById('result');
const overlayDiv = document.getElementById('resultOverlay');
const closeIconDiv = document.getElementById('closeIcon');
resultDiv.style.display = "none";
overlayDiv.style.display = "none";
closeIconDiv.style.display = "none";


window.buttonClick = (key) =>{
  let result;
  if(key=="string_reverse"){
    result = stringReverseUsingStack();
  }
  else if(key=="binary_search"){
    result = binarySearch();
  }
  showResultView(result);
}

let showResultView = (result) => {
  resultDiv.style.display = "block";
  overlayDiv.style.display = "block";
  closeIconDiv.style.display = "block";
  resultDiv.innerHTML = result;
}

window.closeResult = () => {
  resultDiv.style.display = "none";
  overlayDiv.style.display = "none";
  closeIconDiv.style.display = "none";
}