import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {

   componentDidMount() {
      window.addEventListener('keydown', e =>{
         if (e.code === "Escape") {
            console.log('Escape')
            this.props.modalClose();
         }
      })
   }

   render() {
      return (
         <div  className={css.Overlay}>
            <div>
               <div className={css.Modal}>{this.props.children}</div>
            </div>
         </div>
      );
   }
}

export default Modal;


// onCloseEsc(e) {
//    if (e.code === 'Escape') {
//      modal.innerHTML = '';
//      backdrop.classList.add('is-hidden');
//      body.classList.remove('scroll-hidden');
//      document.removeEventListener('keydown', onCloseEsc);
//    }
//  }

//  btnClose.addEventListener('click', e => {
//    modal.innerHTML = '';
//    backdrop.classList.add('is-hidden');
//    body.classList.remove('scroll-hidden');
//  });

//  backdrop.addEventListener('click', e => {
//    if (e.target === backdrop) {
//      modal.innerHTML = '';
//      backdrop.classList.add('is-hidden');
//      body.classList.remove('scroll-hidden');
//    }
//  });
