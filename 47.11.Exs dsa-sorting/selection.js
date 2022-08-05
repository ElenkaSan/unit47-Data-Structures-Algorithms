function selectionSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
		let num = 0;
		for (let j = 1; j < i + 1; j++) {
			if (arr[j] > arr[num]) num = j;
		}
		let temp = arr[i];
		arr[i] = arr[num];
		arr[num] = temp;
	}
	return arr;
  }

module.exports = selectionSort;