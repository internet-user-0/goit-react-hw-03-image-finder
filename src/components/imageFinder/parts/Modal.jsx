import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {

   componentDidMount() {
      window.addEventListener('keydown', this.handelKeyDawn)
   }

   componentWillUnmount() {
      window.removeEventListener('keydown', this.handelKeyDawn)
   }

   handelKeyDawn = e => {
      if (e.code === "Escape") {
         this.props.modalClose();
      }
   }

   render() {
      return (
         <div  className={css.Overlay} onClick={this.props.modalClose}>
            <div>
               <div className={css.Modal}>{this.props.children}</div>
            </div>
         </div>
      );
   }
}

export default Modal;