import fullHeart from '../../assets/heart_full.svg';
import emptyHeart from '../../assets/heart_empty.svg';

const FavoriteBtn = ({ id, favs }) => {
  return (
    <button type="button">
      {favs ? (
        <img src={fullHeart} alt="in favorites" />
      ) : (
        <img src={emptyHeart} alt="not in favorites" />
      )}
    </button>
  );
};

export default FavoriteBtn;
