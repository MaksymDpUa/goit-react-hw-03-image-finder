import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, openModal }) => {
  return images.map(image => {
    const id = image.id;
    const alt = image.tags;
    const webformatURL = image.webformatURL;
    const largeImageURL = image.largeImageURL;

    return (
      <li key={id} className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={alt}
          className={css.ImageGalleryItemImage}
          onClick={() => openModal(largeImageURL, alt)}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {    
    images: PropTypes.array,
    openModal: PropTypes.func,
}
