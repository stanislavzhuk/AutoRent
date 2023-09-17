import { useState } from 'react';
import { toggleFavs } from 'services/advertsApi';
import fullHeart from '../../assets/heart_full.svg';
import emptyHeart from '../../assets/heart_empty.svg';
import css from './FavoriteBtn.module.css';

const FavoriteBtn = ({ id, favs, isChanged }) => {
  const [liked, setLiked] = useState(favs);
  const [status, setStatus] = useState('resolved');

  async function toggleLike() {
    setStatus('pending');
    const res = await toggleFavs(id, !liked);
    if (res) {
      setLiked(!liked);
      isChanged && isChanged();
    }
    setStatus('resolved');
  }

  return (
    <div
      className={css.icon}
      onClick={toggleLike}
      disabled={status === 'pending'}
    >
      <img
        src={liked ? fullHeart : emptyHeart}
        alt={liked ? 'in favorites' : 'not in favorites'}
      />
    </div>
  );
};

export default FavoriteBtn;
