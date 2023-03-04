import React, { Component } from 'react';
import Api from '../../services';
import ImageGaleryItem from './ImageGalleryItem';
import css from './ImageGalery.module.css';
import Button from './Button';
import { InfinitySpin } from 'react-loader-spinner';

class ImageGalery extends Component {
   state = {
      arrayImage: null,
      loading: false,
      modal: false,
      img: null,
   };

   getImages = arrayImage => {
      this.setState({ arrayImage: arrayImage });
   };

   loading = load => {
      this.setState({ loading: load });
   };

   render() {
      return (
         <>
         <Api
               name={this.props.name}
               page={this.props.page}
               getArrayImage={this.getImages}
               loading={this.loading}
            ></Api>
            {this.state.loading && <InfinitySpin width="200" color="#4fa94d" />}

            <ul className={css.ImageGallery}>
               {this.state.arrayImage &&
                  this.state.arrayImage.hits.map(
                     ({ id, webformatURL, largeImageURL }) => {
                        return (
                           <ImageGaleryItem
                              onModal={(img) => {this.props.onModal(img)}}
                              id={id}
                              webformatURL={webformatURL}
                              largeImageURL={largeImageURL}
                           />
                        );
                     }
                  )}
            </ul>
            {this.state.arrayImage && this.state.arrayImage.hits.length !== 0 && (
                  <Button className={css.button} more={this.props.buttonMore} />
            )}
         </>
      );
   }
}

export default ImageGalery;
