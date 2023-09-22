export default function smartFilter(data, obj) {
  const { make, rentalPrice, millageFrom, millageTo } = obj;

  return data.filter(item => {
    const validMake = make === 'All' || !make || item.make === make;
    const validPrice =
      rentalPrice === 'Any' ||
      !rentalPrice ||
      Number(item.rentalPrice.split('$')[1]) <= Number(rentalPrice);
    const validMileageFrom =
      millageFrom === 'All' || !millageFrom || item.mileage >= millageFrom;
    const validMileageTo =
      millageTo === 'All' || !millageTo || item.mileage <= millageTo;

    return validMake && validPrice && validMileageFrom && validMileageTo;
  });
}
