import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { getAdvertById } from 'services/advertsApi';
import {
  formattedCityAddress,
  formattedCountryAddress,
  formattedMileage,
  formattedRentalPrice,
} from '../../utils/format';
import closeBtn from '../../assets/close_btn.svg';
import css from './PopUpModal.module.css';

const PopUpModal = ({ onClose, id }) => {
  const modalRoot = document.querySelector('#modal-root');
  const [carInfo, setCarInfo] = useState(null);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    (async () => {
      setStatus('pending');
      try {
        const res = await getAdvertById(id);
        res && setCarInfo(res);
        res && setStatus('resolved');
      } catch (e) {
        setStatus('rejected');
        console.log(e);
      }
    })();
  }, [id]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onClickClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  if (status === 'resolved') {
    const {
      img,
      make,
      model,
      functionalities,
      mileage,
      year,
      rentalPrice,
      rentalConditions,
      address,
      description,
      fuelConsumption,
      engineSize,
      rentalCompany,
      type,
      accessories,
    } = carInfo;

    const formattedRentalConditions = rentalConditions => {
      return rentalConditions.split('\n').map((item, index) => (
        <li key={index}>
          {item.includes(':') ? (
            <>
              {item.split(':')[0]}:{' '}
              <span className={css.accent}>{item.split(':')[1]}</span>{' '}
            </>
          ) : (
            item
          )}
        </li>
      ));
    };

    return createPortal(
      <div className={css.overlay} onClick={onClickClose}>
        <div className={css.modal}>
          <div className={css.modalCard} tittle={rentalCompany}>
            <img
              src={closeBtn}
              alt="Close Button"
              className={css.closeBtn}
              onClick={onClickClose}
            />
            <img
              src={img}
              alt={`${make}, ${model}`}
              className={css.modalImage}
              loading="lazy"
            />
            <h2 className={css.modalTitle}>
              <span>
                {`${make} `}
                <span className={css.accent}>{`${model}`}</span>
                {`, ${year}`}
              </span>
            </h2>
            <ul className={css.detailsList}>
              <li>{formattedCityAddress(address)}</li>
              <li>{formattedCountryAddress(address)}</li>
              <li>Id: {id}</li>
              <li>Year: {year}</li>
              <li>Type: {type}</li>
              <li>Fuel Consumption: {fuelConsumption}</li>
              <li>Engine Size: {engineSize}</li>
            </ul>
            <p className={css.desription}>{description}</p>
            <h3 className={css.featuresTitle}>
              Accessories and functionalities:{' '}
            </h3>
            <ul className={css.detailsList}>
              {[...functionalities, ...accessories].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className={css.featuresTitle}>Rental Conditions:</h3>
            <ul className={css.rentalDetails}>
              {formattedRentalConditions(rentalConditions)}
              <li>
                {' '}
                Mileage:{' '}
                <span className={css.accent}>
                  {formattedMileage(mileage)}
                </span>{' '}
              </li>
              <li>
                {' '}
                Price:{' '}
                <span className={css.accent}>
                  {formattedRentalPrice(rentalPrice)}
                </span>{' '}
              </li>
            </ul>
            <Link
              className="button-primary button-rental"
              to="tel:+380730000000"
            >
              Rental car
            </Link>
          </div>
        </div>
      </div>,
      modalRoot
    );
  }
};

export default PopUpModal;
