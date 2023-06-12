import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import getImage from 'components/Services/Api';
import css from './ImageGallery.module.css';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    images: [],
    showModal: false,
    largeImage: '',
    alt: '',
    isLoading: false,
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchValue === this.props.searchValue &&
      prevProps.page === this.props.page
    ) {
      return;
    }
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ images: [] });
    }

    this.handleIsLoading();

    getImage(this.props.searchValue, this.props.page)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(images => {
        this.props.showBtn();
        this.setState({
          images: [...this.state.images, ...images.hits],
          totalHits: images.totalHits,
        });
      })
      .catch(err => alert(err))
      .finally(() => {
        this.handleIsLoading();
      });
  }

  openModal = (largeImage, alt) => {
    this.setState({ showModal: true, largeImage: largeImage, alt: alt });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleLoadMore = nextPage => this.setState({ page: nextPage });

  handleIsLoading = () => {
    this.setState(prevState => {
      return { isLoading: !prevState.isLoading };
    });
  };

  render() {
    const isImages = this.state.images.length;
    const { showModal, alt, largeImage, isLoading, images } = this.state;
    return (
      <>
        {showModal && (
          <Modal
            closeModal={this.closeModal}
            alt={alt}
            largeImage={largeImage}
          />
        )}
        {isImages > 0 && (
          <ul className={css.ImageGallery}>
            <ImageGalleryItem images={images} openModal={this.openModal} />
          </ul>
        )}
        {isLoading && (
          <div className={css.loader}>
            <MagnifyingGlass />
          </div>
        )}
        {this.state.images.length > 0 &&
          this.state.images.length < this.state.totalHits && (
            <Button
              handleLoadMore={this.props.handleLoadMore}
              curentPage={this.props.page}
            />
          )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string,
  page: PropTypes.number,
  showBtn: PropTypes.func,
};
