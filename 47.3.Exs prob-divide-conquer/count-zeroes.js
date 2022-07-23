function countZeroes(arr) {
    let low = 0;
	let high = arr.length - 1;
    while (low <= high) {
        let midInx = Math.floor((low + high) / 2);
        let midVal = arr[midInx];
        if (midVal=== 0) {
           high = midInx - 1;
        } 
        else if (midVal === 1) {
           low = midInx + 1;
        }
    }
    return arr.length - high - 1;
}

module.exports = countZeroes
// Time Complexity: O(log N)