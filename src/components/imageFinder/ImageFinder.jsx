import React, { Component } from 'react';
import Searchbar from './parts/Searchbar';
import ImageGalery from './parts/ImageGallery';
import ImageGaleryItem from './parts/ImageGalleryItem';
import css from './styles.module.css';
import Modal from './parts/Modal';

class ImageFinder extends Component {
   state = {
      name: '',
      page: 12,
      img: null,
      modal: false,
   };

   buttonMore = () => {
      this.setState(({ page }) => ({
         page: page + 12,
      }));
   };

   openModal = largeImageURL => {
      this.setState({ img: largeImageURL, modal: true });
   };

   toglModal = () => {
      this.setState(({modal}) => ({
         modal: !modal,
      }) )
   }

   formSubmit = name => {
      this.setState({ name, page: 12 });
   };

   render() {
      return (
         <div className={css.App}>
            <Searchbar onSubmit={this.formSubmit}></Searchbar>

            <ImageGalery>
               <ImageGaleryItem
                  name={this.state.name}
                  page={this.state.page}
                  buttonMore={this.buttonMore}
                  onModal={img => this.openModal(img)}
               />
            </ImageGalery>
            {this.state.modal && (
               <Modal modalClose={this.toglModal}>
                  <img src={this.state.img} alt="asd" />
               </Modal>
            )}
         </div>
      );
   }
}

export default ImageFinder;
