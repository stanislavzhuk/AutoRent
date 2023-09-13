import React from 'react';

const AdvertCard = ({ advert }) => {
  const {
    img,
    id,
    year,
    model,
    make,
    rentalPrice,
    rentalCompany,
    type,
    address,
    accessories,
    favs,
  } = advert;

  return (
    <li>
      <div>
        <img src={img} alt={`${make}, ${model}`} loading="lazy" width={250} />
        <button type="button">♥{favs}</button>
      </div>
      <div>
        <h2>
          <span>
            {`${make} `}
            <span>{`${model}`}</span>
            {`, ${year}`}
          </span>
          <span>{rentalPrice}</span>
        </h2>
        <ul>
          <li>{address.split(',')[1].trim()}</li>
          <li>{address.split(',')[2].trim()}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{accessories[1]}</li>
        </ul>
      </div>
      <button type="button">Learn more</button>
    </li>
  );
};

export default AdvertCard;
