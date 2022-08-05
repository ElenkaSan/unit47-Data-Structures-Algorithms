function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i];
		let nextElement = i;
		while (nextElement > 0 && arr[nextElement - 1] > currentValue) {
			arr[nextElement] = arr[nextElement - 1];
			nextElement = nextElement - 1;
		}
		arr[nextElement] = currentValue;
	}
	return arr;
}

module.exports = insertionSort;