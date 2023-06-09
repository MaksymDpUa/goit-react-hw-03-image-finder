import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ handleLoadMore, curentPage }) => {
  function handleClick() {
    const nextPage = curentPage + 1;
    handleLoadMore(nextPage);
  }

  return (
    <button type="button" className={css.Button} onClick={handleClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
    handleLoadMoreo: PropTypes.func,
    curentPage: PropTypes.number,
}
