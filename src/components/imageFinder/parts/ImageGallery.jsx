import React from 'react';
import css from './ImageGalery.module.css'

const ImageGalery = ({ children }) => <ul className={css.ImageGallery}>{children}</ul>;

export default ImageGalery;
