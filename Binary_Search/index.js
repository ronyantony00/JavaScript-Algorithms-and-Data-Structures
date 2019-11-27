
let findElementIndex = (arr, x, start, end)=> {
  let mid = floor((start + mid) / 2);
  if(end<mid)
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

}

export { searchIndex };