const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let min = array[i], minIdx = i
		for (let j = i; j < array.length; j++) {
			if (min > array[j]) {
				min = array[j]
				minIdx = j			  
			}
		}
		let temp = array[i]
		array[i] = min
		array[minIdx] = temp
	}
}

selectionSort(numbers);
console.log(numbers)