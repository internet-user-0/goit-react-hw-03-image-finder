import React, { Component } from 'react';
import ImageGaleryItem from './ImageGalleryItem';
import css from './ImageGalery.module.css';
import Button from './Button';
import { searchImages } from 'components/services';
import { InfinitySpin } from 'react-loader-spinner';

class ImageGalery extends Component {
   state = {
      arrayImage: null,
      loading: false,
      modal: false,
      img: null,
   };


   componentDidUpdate = async (prevProps, prevState) => {
      if (
         prevProps.name !== this.props.name ||
         prevProps.page !== this.props.page
      )
      this.setState({ loading: true })
      this.setState({arrayImage: await searchImages(this.props.name, this.props.page), loading: false})
   }

   render() {
      return (
         <>
            <ul className={css.ImageGallery}>
               {this.state.arrayImage &&
                  this.state.arrayImage.map(
                     ({ id, webformatURL, largeImageURL }) => {
                        return (
                           <ImageGaleryItem
                              onModal={(img) => {this.props.onModal(img)}}
                              key={id}
                              webformatURL={webformatURL}
                              largeImageURL={largeImageURL}
                           />
                        )
                     }
                  )}
            </ul>
            {this.state.loading && <InfinitySpin width="200" color="#4fa94d" />}
            {this.state.arrayImage && this.state.arrayImage.length !== 0 && (
                  <Button className={css.button} more={this.props.buttonMore} />
            )}
         </>
      );
   }
}

export default ImageGalery;
