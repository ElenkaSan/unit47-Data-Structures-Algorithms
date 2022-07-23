function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) 
       return -1;
    if (num >= arr[high]) 
       return arr[high];
    let mid = Math.floor((low + high) / 2)
    let val = arr[mid];
    if (val === num) 
       return val; 
    if (mid > 0 && arr[mid - 1] <= num && num < val) {
      return arr[mid - 1];
    }
    if (num < val) {
      return findFloor(arr, num, low, mid - 1);
    }
    return findFloor(arr, num, mid + 1, high)
  }

module.exports = findFloor
// Time Complexity: O(log N)