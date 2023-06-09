import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    isShowLoadMore: false,
  };

  showBtn = () => this.setState({ isShowLoadMore: true });
  
  hideBtn = ()=> this.setState({ isShowLoadMore: false });  
  
  resetPage = () => this.setState({ page: 1 });

  onSubmit = searchValue => this.setState({ searchValue });

  handleLoadMore = nextPage => this.setState({ page: nextPage });

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit}
          resetPage={this.resetPage}
        />
        <ImageGallery
          searchValue={this.state.searchValue}
          page={this.state.page}
          showBtn={this.showBtn}
          hideBtn={this.hideBtn}
          handleLoadMore={this.handleLoadMore}
          curentPage={this.state.page}
        />  
      </div>
    );
  }
}
