import { Component } from 'react';
import getImage from 'components/Services/Api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchValue === this.props.searchValue &&
      prevProps.page === this.props.page
    )
      return;
    if (prevProps.searchValue !== this.props.searchValue) {
      this.setState({ images: [] });
    }
    this.props.handleIsLoading();
    getImage(this.props.searchValue, this.props.page)
      .then(resp => resp.json())
      .then(images => {
        this.props.showBtn();
        this.setState({ images: [...this.state.images, ...images.hits] });
      })
      .catch()
      .finally(this.props.handleIsLoading());
  }

  render() {
    const isImages = this.state.images.length;

    return (
      isImages > 0 && (
        <ul className={css.ImageGallery}>
          <ImageGalleryItem images={this.state.images} />
        </ul>
      )
    );
  }
}
