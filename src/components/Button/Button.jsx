import css from './Button.module.css'

export const Button = ({ handleLoadMore, curentPage }) => {
    function handleClick() {
        const nextPage = curentPage + 1;
    handleLoadMore(nextPage)
    }


    return <button type="button" className={css.Button} onClick={handleClick}>Load more</button>
}