const minPrice = 10;
const maxPrice = 300;
const step = 10;

function createArrayWithStep(number, step) {
  const resultArray = [];
  for (let i = step; i <= number; i += step) {
    resultArray.push(i.toString());
  }
  return resultArray;
}

export const priceOptions = [
  { value: 'Any', label: 'Any' },
  ...createArrayWithStep(maxPrice, step)
    .filter(item => item >= minPrice)
    .map(item => ({ label: item, value: item })),
];
