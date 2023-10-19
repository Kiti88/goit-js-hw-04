function makeArray(firstArray, secondArray, maxLength) {

  const resultArray = firstArray.concat(secondArray); // Об'єднуємо обидва масиви
  if (maxLength <= 0) {

    return []; // Перевірка на неправильне значення maxLength
  }

  if (resultArray.length <= maxLength) {

    return resultArray; // Якщо довжина не перевищує maxLength, повертаємо весь масив
  }

  return resultArray.slice(0, maxLength); // Інакше обрізаємо масив до maxLength елементів
}

// Перевірка роботи функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []