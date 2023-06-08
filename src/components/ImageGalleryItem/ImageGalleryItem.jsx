    import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ images }) => {
   
   
    return images.map(image => {
        const id = image.id;
        const Alt = image.tags;
        const webformatURL = image.webformatURL;
        const largeImageURL = image.largeImageURL;

        return <li key={id} className={css.ImageGalleryItem}>
            <img src={webformatURL} alt={Alt} className={css.ImageGalleryItemImage} />
</li>
    }
        
        )
    

    
} 


