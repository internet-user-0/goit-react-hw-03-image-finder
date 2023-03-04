import React, { Component } from 'react';
import css from './ImageGaleryItem.module.css';


class ImageGaleryItem extends Component {
   render() {
      return (
         <li
            className={css.ImageGalleryItem}
            onClick={() => {this.props.onModal(this.props.largeImageURL)}}
            key={this.props.id}
         >
            <img
               className={css.ImageGalleryItem__image}
               src={this.props.webformatURL}
               alt="qwe"
            />
         </li>
      );
   }
}

export default ImageGaleryItem;
