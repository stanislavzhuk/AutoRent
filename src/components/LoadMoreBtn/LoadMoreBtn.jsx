import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.buttonContainer}>
      <button className={css.buttonLM} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
