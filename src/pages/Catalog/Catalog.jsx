import { useEffect, useState } from 'react';
import { getAdverts, getAllAdverts, search } from '../../services/advertsApi';
import { readFromLS, writeToLS } from 'services/localStoreApi';
import SearchBar from 'components/SearchBar/SearchBar';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import PopUpModal from 'components/PopUpModal/PopUpModal';
import css from './Catalog.module.css';

const Catalog = () => {
  const [adverts, setAdverts] = useState(null);
  const [status, setStatus] = useState('fullfield');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadrMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [carId, setCarId] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [shoundUpdateCache, setShoundUpdateCache] = useState(false);

  useEffect(() => {
    (async () => {
      setStatus('pending');
      setShoundUpdateCache(false);
      setError(null);
      try {
        if (!readFromLS('cars')) {
          const all = await getAllAdverts();
          all && writeToLS('cars', all.data);
        }
        const res = await getAdverts();
        res && setAdverts(res);
        setIsSearchActive(false);
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
        setShoundUpdateCache(false);
        try {
          const res = await getAdverts(page);
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

  useEffect(() => {
    (async () => {
      if (isSearchActive) {
        const response = await search(searchData, page, shoundUpdateCache);
        response && setAdverts(response);
        response && response.length >= 8 && response.length < 30
          ? setShowLoadrMore(true)
          : setShowLoadrMore(false);
      }
    })();
  }, [isSearchActive, page, searchData, shoundUpdateCache]);

  function handleSearch(data) {
    setSearchData(data);
    setPage(1);
    setShowLoadrMore(true);
    setIsSearchActive(true);
  }

  const openModal = id => {
    setShowModal(true);
    setCarId(id);
  };

  return (
    <div>
      <h1 className="visually-hidden">Car Rantal Catalog</h1>
      <SearchBar onSearch={handleSearch} />
      {status === 'fullfield' && (
        <ul className={css.cardList}>
          {adverts &&
            adverts.map(advert => (
              <AdvertCard
                openModal={openModal}
                key={advert.id}
                advert={advert}
                isChanged={() => setShoundUpdateCache(true)}
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

export default Catalog;
