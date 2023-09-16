export const formattedCityAddress = address => address.split(',')[1].trim();

export const formattedCountryAddress = address => address.split(',')[2].trim();

export const formattedMileage = mileage => mileage.toLocaleString('en-US');

export const formattedRentalPrice = rentalPrice =>
  `${rentalPrice.substring(1)}$`;
