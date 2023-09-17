export default function smartFilter(data, obj) {
  const { make, rentalPrice, millageFrom, millageTo } = obj;

  return data.filter(item => {
    const validMake = !make || item.make === make;
    const validPrice =
      !rentalPrice ||
      Number(item.rentalPrice.split('$')[1]) <= Number(rentalPrice);
    const validMileageFrom =
      !millageFrom || item.mileage >= `${millageFrom}`;
    const validMileageTo = !millageTo || item.mileage <= `${millageTo}`;

    return validMake && validPrice && validMileageFrom && validMileageTo;
  });
};
