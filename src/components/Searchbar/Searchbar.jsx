import { Component } from 'react';
import css from './Searchbar.module.css'

export class Searchbar extends Component {
  state = {
    value: '',
  };


  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.props.resetPage()
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleChange}
          />
        </form>
      </header>
      //   <form onSubmit={this.handleSubmit}>
      //     <label></label>
      //         <input type='text' value={this.state.value} onChange={this.handleChange}></input>
      //     <button type='submit'>FindImage</button>
      //   </form>
    );
  }
}
