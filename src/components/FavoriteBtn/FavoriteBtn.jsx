import fullHeart from '../../assets/heart_full.svg';
import emptyHeart from '../../assets/heart_empty.svg';
import css from './FavoriteBtn.module.css';

const FavoriteBtn = ({ id, favs }) => {
  return (
    <div className={css.icon}>
      {favs ? (
        <img src={fullHeart} alt="in favorites" />
      ) : (
        <img src={emptyHeart} alt="not in favorites" />
      )}
    </div>
  );
};

export default FavoriteBtn;
