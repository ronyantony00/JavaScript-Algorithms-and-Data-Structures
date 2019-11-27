
let findElementIndex = (arr, x, start, end)=> {
  let mid = Math.floor((start + end) / 2);
  if(start>end)
    return "Element not found";
  if(arr[mid]==x)
    return mid;
  if(arr[mid]>x){
    findElementIndex(arr, x, start, mid-1);
  }else{
    findElementIndex(arr, x, mid+1, end);
  } 
};

const searchElementIndex = (arr, element) => {
  return findElementIndex(arr, element, 0, arr.length-1);
}

export { searchElementIndex };