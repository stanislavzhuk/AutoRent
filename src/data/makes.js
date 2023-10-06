const data = [
  'All',
  'Aston Martin',
  'Audi',
  'BMW',
  'Bentley',
  'Buick',
  'Chevrolet',
  'Chrysler',
  'Ferrari',
  'Ford',
  'GMC',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'Kia',
  'Lamborghini',
  'Land Rover',
  'Lexus',
  'Lincoln',
  'MINI',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Pontiac',
  'Porsche',
  'Skoda',
  'Subaru',
  'Toyota',
  'Volvo',
];

export const brandOptions = data.map(brand => ({
  value: brand,
  label: brand,
}));

const uniqueMakes = new Set();

export const modelOptions = data =>
  data
    .filter(item => {
      const make = item.make;
      if (!uniqueMakes.has(make)) {
        uniqueMakes.add(make);
        return true;
      }
      return false;
    })
    .map(item => ({ label: item.make, value: item.make }))
    .sort((a, b) => (a.label.toLowerCase() < b.label.toLowerCase() ? -1 : 1));
