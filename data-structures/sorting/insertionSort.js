const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
	let j = i-1
	let k = i
	while (j >= 0) {
		if (array[k] < array[j]) {
			let tmp = array[k]
			array[k] = array[j]
			array[j] = tmp
		} else {
			break;
		}
		k--
		j--
	}
  }
}

insertionSort(numbers);
console.log(numbers);