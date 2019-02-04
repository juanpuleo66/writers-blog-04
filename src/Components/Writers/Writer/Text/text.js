import React, { Component } from 'react';

class Text extends Component {
  render() {
console.error('src/Components/Writers/Writer/Text/text.js');
console.log('this.props: ',this.props);
const { title, description, published } = this.props;
    return (
      <div>
        <h4>{title} { published ? `(${published})` : ''}</h4>
        <p>{description ? description : <i>No description</i>}</p>
      </div>  
    );
  }
}

export default Text