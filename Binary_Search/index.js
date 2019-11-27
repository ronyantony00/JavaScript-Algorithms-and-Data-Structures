
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

export { searchElementIndex };