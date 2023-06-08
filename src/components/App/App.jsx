import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    isShowLoadMore: false,
    isLoading: false,
  };

  handleIsLoading = () => {
    this.setState(prevState => {
      return { isLoading: !prevState.isLoading };
    });
  };

  showBtn = () => {
    this.setState({ isShowLoadMore: true });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  onSubmit = searchValue => {
    this.setState({ searchValue });
  };

  handleLoadMore = nextPage => {
    this.setState({ page: nextPage });
   };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} resetPage={this.resetPage} />
        {this.state.isLoading && <MagnifyingGlass />}
        <ImageGallery
          searchValue={this.state.searchValue}
          page={this.state.page}
          showBtn={this.showBtn}
          handleIsLoading={this.handleIsLoading}
        />
        {this.state.isShowLoadMore && (
          <Button
            handleLoadMore={this.handleLoadMore}
            curentPage={this.state.page}
          />
        )}
      </div>
    );
  }
}
