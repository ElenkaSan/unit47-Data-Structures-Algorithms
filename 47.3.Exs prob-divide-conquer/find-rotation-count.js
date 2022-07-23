function findRotationCount(arr) {
    let right = 0;
	let left = arr.length - 1;
	while (right !== left) {
		let midIdx = Math.floor((right + left) / 2);
		let midVal = arr[midIdx];
		let rightVal = arr[right];
		let leftVal = arr[left];

		if (midVal < rightVal || midVal < leftVal) {
			left = midIdx;
		} else {
			right = midIdx + 1;
		}
	}
	return right;
}

module.exports = findRotationCount
// Time Complexity: O(log N)