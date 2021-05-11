class ArrayUtilities {
    /* Your magic here */
    static addZeros = (arr) => arr.map((el) => el * 10);
    static moreThanFifty = (arr) => arr.filter((el) => el > 50);
    static removeFirst = (arr) => arr.filter((el, i) => i !== 0);
    static sumAll = (arr) => arr.reduce((acc, cur) => acc + cur);
    static divide = (arr) => String(arr).split("");
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const addZeros = ArrayUtilities.addZeros(numbers);
  console.log(addZeros);
  
  const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
  console.log(moreThanFifty);
  
  const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
  console.log(noFirst);
  
  const sumAll = ArrayUtilities.sumAll(noFirst);
  console.log(sumAll);
  
  const divided = ArrayUtilities.divide(sumAll);
  console.log(divided);
  