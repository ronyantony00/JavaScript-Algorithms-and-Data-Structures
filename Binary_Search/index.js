
let findElementIndex = (arr, x, start, end)=> {
  
  if(start>end){
    return "Element not found";
  }

  let mid = Math.floor((start + end)/2);

  if(arr[mid]== x){
    return mid;
  }

  if(arr[mid]>x){
    return findElementIndex(arr, x, start, mid-1);
  }
  else{
    return findElementIndex(arr, x, mid+1, end);
  }

};

const searchElementIndex = (arr, element) => {
  const index = findElementIndex(arr, element, 0, arr.length-1);
  return index;
}

const binarySearch = () => {
  let arr = [1, 3, 5, 7, 8, 9]; 
  let element = 8;
  let result = searchElementIndex(arr, element);
  let element2 = 3;
  let result2 = searchElementIndex(arr, element2);
  let element3 = 4;
  let result3 = searchElementIndex(arr, element3);
  let title  = "Binary Search";
  let content = "Binary Search is searching technique which works on Divide and Conquer approach. It used to search any element in a sorted array. As compared to linear, binary search is much faster with Time Complexity of O(logN)<br/><br/>Array to be searched<br/><br/>"+ JSON.stringify(arr);
  let resultContent = "Index for the element "+ element +":  <h3>"+result+"</h3>"+"<br/>Index for the element "+ element2 +":  <h3>"+result2+"</h3>"+"<br/>Index for the element "+ element3 +":  <h3>"+result3+"</h3><br/><br/>";
  let resultHTML = '<div class="result_title">'+title+'</div><div class="result_content">'+content+'</div><div class="result_answer">'+resultContent+'</div>';
  return resultHTML;
}

export { binarySearch };