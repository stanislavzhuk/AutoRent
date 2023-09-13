import { useEffect, useState } from 'react';
import { getAdverts } from '../../services/advertsApi';
import AdvertCard from 'components/AdvertCard/AdvertCard';
import { Link } from 'react-router-dom';

const CarsCatalog = () => {
  const [adverts, setAdverts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getAdverts();
        res && setAdverts(res);
      } catch (e) {
        setError(e);
      }
    })();
  }, []);

  return (
    <div>
      <Link to={'/'}>Go to HomePage</Link>
      <ul>
        {adverts &&
          adverts.map(advert => <AdvertCard key={advert.id} advert={advert} />)}
      </ul>
    </div>
  );
};

export default CarsCatalog;
