// Import stylesheets
import './style.css';
//import modules
import { reverseString } from './String_Reverse_Using_Stack/index.js';
import { searchElementIndex } from './Binary_Search/index.js';

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
  let content = "String to be reversed: <h4>ABCDEFGHIJK </h4><br/>"
  let resultContent = "Reversed String: <h3>"+result+"</h3>";
  showResultView(title,content,resultContent);
}

window.binarySearch = () => {
  let arr = [1, 3, 5, 7, 8, 9]; 
  let element = 8;
  let result = searchElementIndex(arr, element);
  let element2 = 3;
  let result2 = searchElementIndex(arr, element2);
  let element3 = 4;
  let result3 = searchElementIndex(arr, element3);
  let title  = "Binary Search"
  let content = "Binary Search is searching technique which works on Divide and Conquer approach. It used to search any element in a sorted array. As compared to linear, binary search is much faster with Time Complexity of O(logN)<br/><br/>Array to be searched<br/><br/>"+ JSON.stringify(arr);
  let resultContent = "Index for the element "+ element +":  <h3>"+result+"</h3>"+"<br/>Index for the element "+ element2 +":  <h3>"+result2+"</h3>"+"<br/>Index for the element "+ element3 +":  <h3>"+result3+"</h3><br/><br/>";
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