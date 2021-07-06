const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

const dividedNumbers = numbers.map((number) => {
  return number / 2;
});

const selfMultipliedNumbers = numbers.map((number) => {
  return number * number;
});

console.log(doubledNumbers, dividedNumbers, selfMultipliedNumbers);
