// Import stylesheets
import './style.css';
//import modules
import { reverseString } from './String_Reverse_Using_Stack/index.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `JavaScript Algorithms And Data Structures`;

window.stringReverseUsingStack = () => {
  alert(reverseString("ABCDEFGHIJK"));
}