import React, { Component } from 'react';
import css from './/Searchbar.module.css';
import { ReactComponent as AddIcon } from './icon/iconSearch.svg';

class Searchbar extends Component {
   state = {
      name: '',
   };

   nameSearch = e => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
   };

   nameSubmit = e => {
      e.preventDefault();

      if (this.state.name.trim() === '') {
         alert('enter image title');
         return;
      }

      this.props.onSubmit(this.state.name);
      this.setState({
         name: '',
      });
   };
   render() {
      return (
         <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={this.nameSubmit}>
               <button tupe="submit" className={css.SearchForm__button}>
                  <span className="button-label"><AddIcon display='block' fill='black' width='32px' height='32px'/></span>
               </button>
               <input
                  className={css.SearchForm__input}
                  value={this.state.name}
                  type="text"
                  name="name"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  onChange={this.nameSearch}
               />
            </form>
         </header>
      );
   }
}

export default Searchbar;
