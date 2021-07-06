const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

const highGrades = grades.filter((element) => {
  return element < 3;
});

const lowGrades = grades.filter((element) => {
  return element >= 3;
});

console.log(highGrades, lowGrades);
