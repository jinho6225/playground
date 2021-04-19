let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 60];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let mid = Math.floor(array.length / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
	let resultArr = []
	let l = 0, r = 0
	while (l < left.length || r < right.length) {
		if (left[l] && !right[r]) {
			resultArr.push(left[l])
			l++
		} else if (!left[l] && right[r]) {
			resultArr.push(right[r])
			r++
		} else if (left[l] >= right[r]) {
			resultArr.push(right[r])
			r++
		} else if (left[l] < right[r]) {
			resultArr.push(left[l])
			l++
		}		
	}
	return resultArr
}


const answer = mergeSort(numbers);
console.log(answer);