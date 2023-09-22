import {
  formattedCityAddress,
  formattedCountryAddress,
} from '../../utils/format';
import FavoriteBtn from 'components/FavoriteBtn/FavoriteBtn';
import css from './AdvertCard.module.css';

const AdvertCard = ({ advert, openModal, isChanged }) => {
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
    <li className={css.cardItem} title={`${accessories.join('\n')}`}>
      <div className={css.imageContainer}>
        <img
          className={css.image}
          src={img}
          alt={`${make}, ${model}`}
          loading="lazy"
        />
        <FavoriteBtn favs={favs ? favs : false} id={id} isChanged={isChanged} />
      </div>
      <div>
        <h2 className={css.cardTitle}>
          <span>
            {`${make} `}
            <span className={css.accent}>{`${model}`}</span>
            {`, ${year}`}
          </span>
          <span>{rentalPrice}</span>
        </h2>
        <ul className={css.descrList}>
          <li>{formattedCityAddress(address)}</li>
          <li>{formattedCountryAddress(address)}</li>
          <li>{rentalCompany}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{accessories[1]}</li>
        </ul>
      </div>
      <button
        className="button-primary"
        type="button"
        onClick={() => openModal(id)}
      >
        Learn more
      </button>
    </li>
  );
};

export default AdvertCard;
