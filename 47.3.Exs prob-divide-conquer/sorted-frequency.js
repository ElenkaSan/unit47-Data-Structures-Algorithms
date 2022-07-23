function sortedFrequency(arr,val){ 
    let first = findFirst(arr, val);
    let last = findLast(arr, val);
    if (last == -1) 
       return last;
    return last - first + 1;
  }
  
  function findFirst(arr,val){
    let low = 0;
    let high = arr.length - 1
    while(low <= high){
      let midInx = Math.floor((high + low) / 2);
      let midval = arr[midInx];
      if((midInx === 0 || val > arr[midInx - 1]) && midval === val){
        return midInx
      }else if (midval >= val){
        high = midInx - 1
      }else{
        low = midInx + 1
      }
    }
    return -1
  }
  
  
  function findLast(arr,val){
    let low = 0;
    let high = arr.length - 1;
    while(low <= high){
      let midInx = Math.floor((high + low) / 2)
      let midVal = arr[midInx];
      if((arr[midInx + 1] > val || arr.length - 1 === midInx) && midVal === val){
        return midInx 
      }else if (midVal > val){
        high = midInx - 1
      }else{
        low = midInx + 1
      }
    }
    return -1
  }

module.exports = sortedFrequency
// Time Complexity: O(log N)