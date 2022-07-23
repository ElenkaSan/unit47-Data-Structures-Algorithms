function findRotatedIndex(arr, val) {
    let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let midIdx = Math.floor((left + right) / 2);
		if (arr[midIdx] === val) 
            return midIdx;
		if (arr[midIdx] >= arr[left]) {
			if (arr[left] <= val && val < arr[midIdx]) {
				right = midIdx - 1; //<-- set last index as one before middle index
			} else {
				left = midIdx + 1; //<-- set first index as one after middle index
			}
		} else {
			left = midIdx + 1;
			right = midIdx - 1;
		}
	}
	return -1; //<-- else return -1
}

module.exports = findRotatedIndex
// Time Complexity: O(log N)