const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let k = 0
        for (let j = 1; j < array.length; j++) {
            if (array[k] > array[j]) {
                let temp = array[k]
                array[k] = array[j]
                array[j] = temp
                k++
            } else {
              k++
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);


function bubbleSort2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j+1] < array[j]) {
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp                
            } 
        }
    }
}

bubbleSort2(numbers2);
console.log(numbers2);