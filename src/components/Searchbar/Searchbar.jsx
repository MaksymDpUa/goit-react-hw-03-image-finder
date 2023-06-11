import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
    isSubmitBlock: true,
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value: value, isSubmitBlock: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isSubmitBlock) {
      return;
    }
    this.props.onSubmit(this.state.value);
    this.props.resetPage();
    this.setState({ isSubmitBlock: true });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit" className={css.SearchFormButton}>
            Search
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  resetPage: PropTypes.func,
};
