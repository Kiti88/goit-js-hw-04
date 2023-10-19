function isEnoughCapacity(products, containerSize) {

  // Отримуємо масив значень товарів з об'єкта і сумуємо їх

  const totalProducts = Object.values(products).reduce((total, count) => total + count, 0);
  
  // Порівнюємо загальну кількість товарів з розміром контейнера

  return totalProducts <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)

); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)

); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)

); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
  
); // false