import React, { Component } from 'react';
import Button from './Button';
import css from './ImageGaleryItem.module.css';

class ImageGaleryItem extends Component {
   state = {
      arrayImage: null,
      loading: false,
      modal: false,
      img: null,
   };

   componentDidUpdate(prevProps, prevState) {
      if (
         prevProps.name !== this.props.name ||
         prevProps.page !== this.props.page
      ) {
         this.setState({ loading: true, arrayImage: null });
         fetch(
            `https://pixabay.com/api/?q=${this.props.name}&page=1&key=29362166-5d2238b188a86f65197883688&image_type=photo&orientation=horizontal&per_page=${this.props.page}`
         )
            .then(res => res.json())
            .then(arrayImage => this.setState({ arrayImage }))
            .finally(() => this.setState({ loading: false }));
      }
   }
   render() {
      const { arrayImage, loading } = this.state;
      return (
         <>
            {loading && <li>загрузка</li>}
            {arrayImage &&
               arrayImage.hits.map(({ id, webformatURL, largeImageURL }) => {
                  return (
                     <li
                        className={css.ImageGalleryItem}
                        onClick={() => {
                           this.setState({ img: largeImageURL });
                           this.props.onModal(this.state.img);
                        }}
                        key={id}
                     >
                        <img
                           className={css.ImageGalleryItem__image}
                           src={webformatURL}
                           alt="qwe"
                        />
                     </li>
                  );
               })}
            {arrayImage && arrayImage.hits.length !== 0 && (
               <li className={css.ImageGalleryItem__button}>
                  <Button more={this.props.buttonMore} />
               </li>
            )}
         </>
      );
   }
}

export default ImageGaleryItem;
