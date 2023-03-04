import React, { Component } from 'react';

class Api extends Component {
   componentDidUpdate(prevProps, prevState) {
      if (
         prevProps.name !== this.props.name ||
         prevProps.page !== this.props.page
      ) {
         this.props.loading(true)
         fetch(
            `https://pixabay.com/api/?q=${this.props.name}&page=1&key=29362166-5d2238b188a86f65197883688&image_type=photo&orientation=horizontal&per_page=${this.props.page}`
         )
            .then(res => res.json())
            .then(arrayImage => this.props.getArrayImage(arrayImage))
            .finally(() => this.props.loading(false));
      }
   }

   render() {
      return <></>;
   }
}

export default Api;
