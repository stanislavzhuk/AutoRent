import { useEffect, useState } from 'react';
import { getFavotites } from '../../services/advertsApi';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import PopUpModal from 'components/PopUpModal/PopUpModal';
import css from './Favorite.module.css';

const Favorite = () => {
  const [adverts, setAdverts] = useState(null);
  const [status, setStatus] = useState('fullfield');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadrMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    (async () => {
      setStatus('pending');
      setError(null);
      try {
        const res = await getFavotites();
        res && setAdverts(res);
        res && setStatus('fullfield');
      } catch (e) {
        setStatus('rejected');
        setError(e.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (page !== 1) {
      (async () => {
        try {
          const res = await getFavotites(page);
          res &&
            setAdverts(prev => {
              return [...prev, ...res];
            });
          res?.length < 8 && setShowLoadrMore(false);
        } catch (e) {
          setError(e.message);
        }
      })();
    }
  }, [page]);

  const openModal = id => {
    setShowModal(true);
    setCarId(id);
  };

  return (
    <div>
      <h1 className="visually-hidden">Favorites Car</h1>
      {status === 'fullfield' && (
        <ul className={css.cardList}>
          {adverts &&
            adverts.map(advert => (
              <AdvertCard
                openModal={openModal}
                key={advert.id}
                advert={advert}
              />
            ))}
        </ul>
      )}
      {showLoadMore && adverts?.length > 7 && (
        <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
      )}
      {showModal && (
        <PopUpModal id={carId} onClose={() => setShowModal(prev => !prev)} />
      )}
      {status === 'rejected' && error && (
        <div className={css.error}> {error} </div>
      )}
    </div>
  );
};

export default Favorite;