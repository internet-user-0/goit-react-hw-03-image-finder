import React from 'react';
import css from './Button.module.css';

const ButtonLoad = ({ more }) => (
   <button onClick={more} type="button" className={css.Button}>
      Load more
   </button>
);

export default ButtonLoad;
