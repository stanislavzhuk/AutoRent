import { useEffect, useState } from 'react';
import { getAdverts } from '../../services/advertsApi';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import { Link } from 'react-router-dom';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';

const CarsCatalog = () => {
  const [adverts, setAdverts] = useState(null);
  const [status, setStatus] = useState('fullfield');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadrMore] = useState(true);

  useEffect(() => {
    (async () => {
      setStatus('pending');
      setError(null);
      try {
        const res = await getAdverts();
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

  return (
    <div>
      <Link to={'/'}>Go to HomePage</Link>
      {status === 'fullfield' && (
        <ul>
          {adverts &&
            adverts.map(advert => (
              <AdvertCard key={advert.id} advert={advert} />
            ))}
        </ul>
      )}
      {showLoadMore && adverts?.length > 7 && (
        <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
      )}
      {status === 'rejected' && error && <div> {error} </div>}
    </div>
  );
};

export default CarsCatalog;
